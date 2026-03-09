<template>
  <div class="allow-list-generator">
    <!-- Parent Organization -->
    <div class="section">
      <h3>Parent Organization (Consortium / Project)</h3>
      <div class="form-group">
        <label>Identifier</label>
        <input v-model="parentOrg.identifier" placeholder="e.g. dsf.dev" />
      </div>
      <div class="form-group">
        <label>Name</label>
        <input v-model="parentOrg.name" placeholder="e.g. DSF Community" />
      </div>
    </div>

    <!-- Member Organizations -->
    <div class="section">
      <h3>Member Organizations</h3>
      <div v-for="(org, idx) in members" :key="'org-' + idx" class="member-card">
        <div class="member-header">
          <strong>Organization {{ idx + 1 }}</strong>
          <button class="btn-remove" @click="members.splice(idx, 1)" title="Remove Organization">&#x2715;</button>
        </div>
        <div class="form-group">
          <label>Identifier</label>
          <input v-model="org.identifier" placeholder="e.g. hospital.example.org" />
        </div>
        <div class="form-group">
          <label>Name</label>
          <input v-model="org.name" placeholder="e.g. Example Hospital" />
        </div>
        <div class="form-group">
          <label>DSF FHIR Server Endpoint URL</label>
          <input v-model="org.endpointUrl" placeholder="https://dsf.hospital.example.org/fhir" />
        </div>
        <div class="form-group">
          <label>Endpoint Identifier</label>
          <input v-model="org.endpointIdentifierOverride" :placeholder="deriveEndpointIdentifier(org.endpointUrl)" />
          <span class="field-hint" v-if="!org.endpointIdentifierOverride && deriveEndpointIdentifier(org.endpointUrl)">Auto-generated from URL: <code>{{ deriveEndpointIdentifier(org.endpointUrl) }}</code></span>
        </div>
        <div class="thumbprints">
          <label>Certificate Thumbprints (SHA-512 hex)</label>
          <div v-for="(tp, i) in org.thumbprints" :key="'member-' + idx + '-tp-' + i" class="thumbprint-row">
            <input v-model="org.thumbprints[i]" placeholder="SHA-512 thumbprint (128 hex characters)" />
            <button class="btn-remove" @click="org.thumbprints.splice(i, 1)" v-if="org.thumbprints.length > 1" title="Remove">&#x2715;</button>
          </div>
          <button class="btn-add" @click="org.thumbprints.push('')">+ Add Thumbprint</button>
        </div>
        <div class="form-group">
          <label>Roles</label>
          <div class="roles-grid">
            <label v-for="role in availableRoles" :key="role.code" class="role-checkbox">
              <input type="checkbox" :value="role.code" v-model="org.roles" />
              {{ role.code }} <span class="role-label">{{ role.display }}</span>
            </label>
          </div>
        </div>
      </div>
      <button class="btn-primary" @click="addMember">+ Add Member Organization</button>
    </div>

    <!-- Generate -->
    <div class="section">
      <h3>Generated Bundle</h3>
      <div class="button-row">
        <button class="btn-primary" @click="generate">Generate FHIR Bundle</button>
        <button class="btn-secondary" @click="copyToClipboard" v-if="generatedJson">Copy to Clipboard</button>
        <button class="btn-secondary" @click="downloadJson" v-if="generatedJson">Download JSON</button>
      </div>
      <div v-if="validationErrors.length" class="validation-errors">
        <p v-for="(err, i) in validationErrors" :key="i">{{ err }}</p>
      </div>
      <div v-if="copySuccess" class="copy-success">Copied to clipboard!</div>
      <pre v-if="generatedJson" class="json-output"><code>{{ generatedJson }}</code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import {
  deriveEndpointIdentifier,
  validate as validateBundle,
  generateBundle,
} from './allowlist-bundle.js';

const availableRoles = [
  { code: 'DIC', display: 'Data Integration Center' },
  { code: 'DTS', display: 'Data Transfer Site' },
  { code: 'DMS', display: 'Data Management Site' },
  { code: 'COS', display: 'Coordinating Site' },
  { code: 'CRR', display: 'Central Research Repository' },
  { code: 'HRP', display: 'Health Research Platform' },
  { code: 'TTP', display: 'Trusted Third Party' },
  { code: 'UAC', display: 'Use-and-Access Committee' },
  { code: 'AMS', display: 'Allowlist Management Site' },
  { code: 'ASP', display: 'Analysis Service Provider' },
  { code: 'SPR', display: 'Service Provider Registry' },
  { code: 'TSP', display: 'Terminology Service Provider' },
  { code: 'PPH', display: 'Process Plugin Hub' },
  { code: 'BIO', display: 'Biobank' },
];

function createOrg() {
  return {
    identifier: '',
    name: '',
    endpointUrl: '',
    endpointIdentifierOverride: '',
    thumbprints: [''],
    roles: [],
  };
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const parentOrg = reactive({
  identifier: '',
  name: '',
});

const members = ref([createOrg()]);
const generatedJson = ref('');
const validationErrors = ref([]);
const copySuccess = ref(false);

function addMember() {
  members.value.push(createOrg());
}

function generate() {
  const errors = validateBundle(parentOrg, members.value);
  validationErrors.value = errors;
  if (errors.length > 0) {
    generatedJson.value = '';
    return;
  }

  const bundle = generateBundle(parentOrg, members.value, uuid);
  generatedJson.value = JSON.stringify(bundle, null, 2);
}

async function copyToClipboard() {
  try {
    await navigator.clipboard.writeText(generatedJson.value);
    copySuccess.value = true;
    setTimeout(() => { copySuccess.value = false; }, 2000);
  } catch {
    // fallback
    const el = document.createElement('textarea');
    el.value = generatedJson.value;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    copySuccess.value = true;
    setTimeout(() => { copySuccess.value = false; }, 2000);
  }
}

function downloadJson() {
  const blob = new Blob([generatedJson.value], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'allowlist-bundle.json';
  a.click();
  URL.revokeObjectURL(url);
}
</script>

<style scoped>
.allow-list-generator {
  margin-top: 50px;
}

.section {
  margin-bottom: 2rem;
}

.section h3 {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--vp-c-accent, #3eaf7c);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.form-group input,
.thumbprint-row input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid var(--vp-c-border, #ddd);
  border-radius: 4px;
  font-size: 0.9rem;
  box-sizing: border-box;
}

.thumbprints {
  margin-bottom: 1rem;
}

.thumbprints label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
}

.thumbprint-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  align-items: center;
}

.thumbprint-row input {
  flex: 1;
  font-family: monospace;
  font-size: 0.8rem;
}

.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.25rem;
}

.role-checkbox {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: normal !important;
  font-size: 0.85rem;
  cursor: pointer;
}

.role-checkbox input[type="checkbox"] {
  width: auto;
}

.role-label {
  color: var(--text-color-lighter, #666);
  font-size: 0.8rem;
}

.member-card {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--vp-c-border, #ddd);
  border-radius: 6px;
}

.member-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.btn-primary {
  background: var(--vp-c-accent-soft, #f5f5f5);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.btn-primary:hover {
  color: var(--vp-c-accent, #3eaf7c);
}

.btn-secondary {
  background: var(--vp-c-accent-soft, #f5f5f5);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.btn-secondary:hover {
  color: var(--vp-c-accent, #3eaf7c);
}

.btn-add {
  background: var(--vp-c-accent-soft, #f5f5f5);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  border: none;
}

.btn-add:hover {
  color: var(--vp-c-accent, #3eaf7c);
}

.btn-remove {
  border: none;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  color: var(--caution-c-text,#e53e3e);
  font-size: 0.8rem;
  flex-shrink: 0;
  background: var(--caution-c-soft);
}

.btn-remove:hover {
  background: var(--caution-c-accent);
}

.button-row {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}

.validation-errors {
  background: var(--caution-c-soft);
  border-radius: 4px;
  padding: 0.75rem 1rem;
  margin-bottom: 1rem;
}

.validation-errors p {
  margin: 0.25rem 0;
  color: var(--caution-c-text,#e53e3e);
  font-size: 0.85rem;
}

.copy-success {
  color: var(--vp-c-accent, #3eaf7c);
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
}

.json-output {
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--vp-c-border);
  overflow-x: auto;
  font-size: 0.8rem;
  max-height: 600px;
  overflow-y: auto;
}

.json-output code {
  background: none;
  padding: 0;
  color: inherit;
}

.field-hint {
  display: block;
  margin-top: 0.25rem;
  font-size: 0.8rem;
}

.field-hint code {
  font-size: 0.8rem;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}
</style>
