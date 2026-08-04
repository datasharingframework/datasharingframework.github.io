// Curated index for the llms.txt / llms-full.txt files.
// This is the editorial source of truth: edit titles, descriptions, ordering
// and which pages are included here, then regenerate with:
//   npm run docs:generate-llms
//
// 'link' is relative to https://dsf.dev/ (e.g. 'operations/latest/install.html')
// or a full external URL. The full-text generator maps each dsf.dev link to its
// markdown source; external links and pages without a markdown source are listed
// in llms.txt but skipped in llms-full.txt.

export interface LlmsPage {
  title: string;
  link: string;
  /** Shown in llms.txt. Optional for full-text-only pages (see fullExtra). */
  description?: string;
}

export interface LlmsSubsection {
  heading: string;
  pages: LlmsPage[];
}

export interface LlmsSection {
  heading: string;
  pages: LlmsPage[];
  subsections?: LlmsSubsection[];
}

export const siteUrl = 'https://dsf.dev';

export const title = 'Data Sharing Framework (DSF)';

export const intro =
  "The Data Sharing Framework (DSF) is a secure middleware for distributing data sharing processes based on BPMN 2.0 and FHIR R4 standards. It enables biomedical researchers to extract, merge, pseudonymize, and share data across organizational boundaries. Funded by the German Federal Ministry of Research, Technology and Space within the Medical Informatics Initiative (MII). Website: https://dsf.dev";

export const sections: LlmsSection[] = [
  {
    "heading": "Core Concepts",
    "pages": [
      {
        "title": "Introduction",
        "link": "explore/concepts/introduction.html",
        "description": "Overview of the DSF, the Medical Informatics Initiative, and Data Integration Centers"
      },
      {
        "title": "Basics",
        "link": "explore/concepts/basics.html",
        "description": "Fundamental concepts of the DSF architecture"
      },
      {
        "title": "Architecture",
        "link": "explore/concepts/architecture.html",
        "description": "Technical architecture of the DSF including FHIR endpoints and business process engines"
      },
      {
        "title": "Security",
        "link": "explore/concepts/security.html",
        "description": "Security model and concepts used by the DSF"
      },
      {
        "title": "Allow List",
        "link": "explore/concepts/allow-list.html",
        "description": "How the DSF manages trusted organizations via allow lists"
      },
      {
        "title": "Process Plugins",
        "link": "explore/concepts/process-plugins.html",
        "description": "How process plugins extend the DSF with new data sharing processes"
      },
      {
        "title": "Network Setup",
        "link": "explore/concepts/network-setup.html",
        "description": "How to set up a DSF network"
      }
    ]
  },
  {
    "heading": "Use Cases",
    "pages": [
      {
        "title": "Feasibility",
        "link": "explore/use-cases/feasibility.html",
        "description": "Feasibility queries across multiple sites"
      },
      {
        "title": "NUM (Network University Medicine)",
        "link": "explore/use-cases/num.html",
        "description": "Use in the German Network University Medicine"
      },
      {
        "title": "Internal MII Data Sharing",
        "link": "explore/use-cases/internal-mii-data-sharing.html",
        "description": "Data sharing within the Medical Informatics Initiative"
      }
    ]
  },
  {
    "heading": "Operations (Latest)",
    "pages": [
      {
        "title": "Get Started",
        "link": "operations/get-started.html",
        "description": "Getting started with DSF operations"
      },
      {
        "title": "Installation Guide",
        "link": "operations/latest/install.html",
        "description": "Step-by-step installation of the latest DSF release"
      },
      {
        "title": "Release Notes",
        "link": "operations/latest/release-notes.html",
        "description": "What's new in the latest DSF release"
      },
      {
        "title": "FHIR Server Configuration",
        "link": "operations/latest/fhir/configuration.html",
        "description": "Configuration options for the FHIR server component"
      },
      {
        "title": "BPE Configuration",
        "link": "operations/latest/bpe/configuration.html",
        "description": "Configuration options for the Business Process Engine"
      },
      {
        "title": "FHIR Reverse Proxy",
        "link": "operations/latest/fhir-reverse-proxy/configuration.html",
        "description": "Reverse proxy configuration for the FHIR endpoint"
      },
      {
        "title": "BPE Reverse Proxy",
        "link": "operations/latest/bpe-reverse-proxy/configuration.html",
        "description": "Reverse proxy configuration for the BPE"
      },
      {
        "title": "Allow List Management",
        "link": "operations/latest/allowList-mgm.html",
        "description": "Managing the allow list of trusted organizations"
      },
      {
        "title": "Process Plugin Deployment",
        "link": "operations/process-plugin-deployment.html",
        "description": "How to deploy process plugins"
      },
      {
        "title": "Passwords and Secrets",
        "link": "operations/latest/passwords-secrets.html",
        "description": "Managing passwords and secrets"
      },
      {
        "title": "Root Certificates",
        "link": "operations/latest/root-certificates.html",
        "description": "Certificate management"
      },
      {
        "title": "Image Verification",
        "link": "operations/latest/image-verification.html",
        "description": "Verifying the authenticity and integrity of DSF container images"
      },
      {
        "title": "Security Advisories",
        "link": "operations/latest/security-advisories.html",
        "description": "Security advisories published with the latest release"
      },
      {
        "title": "Upgrade from DSF v1",
        "link": "operations/latest/upgrade-from-1.html",
        "description": "Migration guide from DSF v1 to v2"
      },
      {
        "title": "Upgrade within DSF v2",
        "link": "operations/latest/upgrade-from-2.html",
        "description": "Upgrading between DSF v2.x versions"
      },
      {
        "title": "OIDC Configuration (FHIR)",
        "link": "operations/latest/fhir/oidc.html",
        "description": "OpenID Connect setup for FHIR server"
      },
      {
        "title": "OIDC Configuration (BPE)",
        "link": "operations/latest/bpe/oidc.html",
        "description": "OpenID Connect setup for BPE"
      },
      {
        "title": "Access Control (FHIR)",
        "link": "operations/latest/fhir/access-control.html",
        "description": "Access control for the FHIR server"
      },
      {
        "title": "Access Control (BPE)",
        "link": "operations/latest/bpe/access-control.html",
        "description": "Access control for the Business Process Engine"
      }
    ]
  },
  {
    "heading": "Troubleshooting",
    "pages": [
      {
        "title": "Common HTTP Status Codes",
        "link": "operations/troubleshooting/common-http-status-codes.html",
        "description": "Common HTTP errors and solutions"
      },
      {
        "title": "Connection Refused",
        "link": "operations/troubleshooting/connection-refused.html",
        "description": "Troubleshooting connection refused errors"
      },
      {
        "title": "Connection Timeout",
        "link": "operations/troubleshooting/connection-timeout.html",
        "description": "Troubleshooting connection timeouts"
      },
      {
        "title": "Read Timeout",
        "link": "operations/troubleshooting/read-timeout.html",
        "description": "Troubleshooting read timeouts"
      },
      {
        "title": "SSL Issues",
        "link": "operations/troubleshooting/ssl.html",
        "description": "Troubleshooting SSL/TLS certificate problems"
      },
      {
        "title": "Unknown Host",
        "link": "operations/troubleshooting/unknown-host.html",
        "description": "Troubleshooting DNS resolution issues"
      }
    ]
  },
  {
    "heading": "Process Plugin Development (API v2 - Current)",
    "pages": [
      {
        "title": "Concept",
        "link": "process-development/api-v2/concept.html",
        "description": "Process plugin concept and design"
      },
      {
        "title": "Get Started",
        "link": "process-development/api-v2/get-started.html",
        "description": "Getting started with process plugin development"
      },
      {
        "title": "Create a Process Plugin",
        "link": "process-development/api-v2/create.html",
        "description": "Step-by-step guide to creating a process plugin"
      },
      {
        "title": "Implementation",
        "link": "process-development/api-v2/implementation.html",
        "description": "Implementation details"
      },
      {
        "title": "Testing",
        "link": "process-development/api-v2/testing.html",
        "description": "Testing process plugins"
      },
      {
        "title": "Best Practices",
        "link": "process-development/api-v2/best-practices.html",
        "description": "Best practices for process plugin development"
      },
      {
        "title": "Migration from API v1",
        "link": "process-development/api-v2/migration.html",
        "description": "Migrating process plugins from API v1 to v2"
      },
      {
        "title": "Javadoc",
        "link": "process-development/api-v2/javadoc.html",
        "description": "Java API reference"
      },
      {
        "title": "Publishing on DSF Hub",
        "link": "process-development/api-v2/publishing/publish-on-dsfhub.html",
        "description": "How to publish process plugins"
      }
    ],
    "subsections": [
      {
        "heading": "BPMN in DSF",
        "pages": [
          {
            "title": "BPMN Overview",
            "link": "process-development/api-v2/bpmn/",
            "description": "BPMN 2.0 elements supported by the DSF"
          },
          {
            "title": "Service Tasks",
            "link": "process-development/api-v2/bpmn/service-tasks.html",
            "description": "Using service tasks in DSF processes"
          },
          {
            "title": "User Tasks",
            "link": "process-development/api-v2/bpmn/user-tasks.html",
            "description": "User tasks for human interaction"
          },
          {
            "title": "Messaging",
            "link": "process-development/api-v2/bpmn/messaging.html",
            "description": "Cross-site messaging via BPMN"
          },
          {
            "title": "Gateways",
            "link": "process-development/api-v2/bpmn/gateways.html",
            "description": "BPMN gateways for process flow control"
          },
          {
            "title": "Conditions",
            "link": "process-development/api-v2/bpmn/conditions.html",
            "description": "Conditional flow in BPMN processes"
          },
          {
            "title": "Execution Listeners",
            "link": "process-development/api-v2/bpmn/execution-listeners.html",
            "description": "Execution listeners for process events"
          },
          {
            "title": "Timer Events",
            "link": "process-development/api-v2/bpmn/timer-intermediate-catching-events.html",
            "description": "Timer-based events"
          }
        ]
      },
      {
        "heading": "FHIR Resources",
        "pages": [
          {
            "title": "FHIR Overview",
            "link": "process-development/api-v2/fhir/",
            "description": "FHIR R4 resources used by DSF process plugins"
          },
          {
            "title": "Task Resource",
            "link": "process-development/api-v2/fhir/task.html",
            "description": "The FHIR Task resource in DSF"
          },
          {
            "title": "ActivityDefinition",
            "link": "process-development/api-v2/fhir/activitydefinition.html",
            "description": "Defining activities with FHIR ActivityDefinition"
          },
          {
            "title": "CodeSystem",
            "link": "process-development/api-v2/fhir/codesystem.html",
            "description": "Custom CodeSystems for DSF processes"
          },
          {
            "title": "ValueSet",
            "link": "process-development/api-v2/fhir/valueset.html",
            "description": "ValueSets in DSF processes"
          },
          {
            "title": "Questionnaire",
            "link": "process-development/api-v2/fhir/questionnaire-and-questionnaireresponse.html",
            "description": "Questionnaire and QuestionnaireResponse resources"
          }
        ]
      },
      {
        "heading": "DSF Internals",
        "pages": [
          {
            "title": "Process Plugin API",
            "link": "process-development/api-v2/dsf/process-plugin-api.html",
            "description": "The DSF Process Plugin API"
          },
          {
            "title": "Process Plugin Definition",
            "link": "process-development/api-v2/dsf/process-plugin-definition.html",
            "description": "Defining a process plugin"
          },
          {
            "title": "BPMN Process Execution",
            "link": "process-development/api-v2/dsf/bpmn-process-execution.html",
            "description": "How the DSF executes BPMN processes"
          },
          {
            "title": "BPMN Process Variables",
            "link": "process-development/api-v2/dsf/bpmn-process-variables.html",
            "description": "Available process variables"
          },
          {
            "title": "Message Correlation",
            "link": "process-development/api-v2/dsf/message-correlation.html",
            "description": "How messages are correlated between sites"
          },
          {
            "title": "Spring Framework Integration",
            "link": "process-development/api-v2/dsf/spring-framework-integration.html",
            "description": "Spring integration details"
          }
        ]
      },
      {
        "heading": "Developer Guides",
        "pages": [
          {
            "title": "Starting a Process",
            "link": "process-development/api-v2/guides/starting-a-process-via-task-resources.html",
            "description": "How to start a DSF process"
          },
          {
            "title": "Accessing Process Variables",
            "link": "process-development/api-v2/guides/accessing-bpmn-process-variables.html",
            "description": "Working with BPMN process variables"
          },
          {
            "title": "Accessing Task Resources",
            "link": "process-development/api-v2/guides/accessing-task-resources-during-execution.html",
            "description": "Accessing FHIR Task resources during execution"
          },
          {
            "title": "Creating Activity Definitions",
            "link": "process-development/api-v2/guides/creating-activity-definitions.html",
            "description": "Guide to creating ActivityDefinitions"
          },
          {
            "title": "Creating CodeSystems",
            "link": "process-development/api-v2/guides/creating-codesystems-for-dsf-processes.html",
            "description": "Guide to creating CodeSystems"
          },
          {
            "title": "Creating ValueSets",
            "link": "process-development/api-v2/guides/creating-valuesets-for-dsf-processes.html",
            "description": "Guide to creating ValueSets"
          },
          {
            "title": "Creating Task Resources",
            "link": "process-development/api-v2/guides/creating-task-resources-based-on-a-definition.html",
            "description": "Creating Task resources"
          },
          {
            "title": "Read Access Tags",
            "link": "process-development/api-v2/guides/configuring-read-access-tags.html",
            "description": "Configuring read access tags"
          },
          {
            "title": "Task Parameters",
            "link": "process-development/api-v2/guides/adding-task-parameters-to-task-profiles.html",
            "description": "Adding parameters to Task profiles"
          },
          {
            "title": "User Tasks",
            "link": "process-development/api-v2/guides/user-tasks-in-the-dsf.html",
            "description": "Implementing user tasks"
          },
          {
            "title": "Managing Messages",
            "link": "process-development/api-v2/guides/managing-mutiple-incoming-messages-and-missing-messages.html",
            "description": "Handling multiple and missing messages"
          }
        ]
      }
    ]
  },
  {
    "heading": "Linter Tool",
    "pages": [
      {
        "title": "Linter Tool",
        "link": "process-development/linter-tool/linter-tool.html",
        "description": "Process plugin validation tool"
      },
      {
        "title": "Validation Rules",
        "link": "process-development/linter-tool/validation.html",
        "description": "Validation rules and checks"
      },
      {
        "title": "Phases",
        "link": "process-development/linter-tool/phases.html",
        "description": "Linter validation phases"
      },
      {
        "title": "Troubleshooting",
        "link": "process-development/linter-tool/troubleshooting.html",
        "description": "Linter troubleshooting"
      }
    ]
  },
  {
    "heading": "DSF Development",
    "pages": [
      {
        "title": "FHIR Implementation Guide",
        "link": "dsf-development/v2/fhir-ig.html",
        "description": "DSF FHIR Implementation Guide"
      },
      {
        "title": "Maven Build",
        "link": "dsf-development/v2/maven.html",
        "description": "Building the DSF with Maven"
      }
    ]
  },
  {
    "heading": "Community",
    "pages": [
      {
        "title": "Team",
        "link": "community/team.html",
        "description": "The team behind the DSF"
      },
      {
        "title": "Communication",
        "link": "community/communication.html",
        "description": "How to reach the DSF community"
      },
      {
        "title": "Ecosystem",
        "link": "community/ecosystem.html",
        "description": "Partner organizations and ecosystem"
      },
      {
        "title": "Contributing Code",
        "link": "community/contribute/code.html",
        "description": "How to contribute code"
      },
      {
        "title": "Contributing Documentation",
        "link": "community/contribute/documentation.html",
        "description": "How to contribute documentation"
      },
      {
        "title": "Consultation Hours",
        "link": "community/consultation-hours.html",
        "description": "Regular consultation hours for DSF users"
      }
    ]
  },
  {
    "heading": "Additional Resources",
    "pages": [
      {
        "title": "Publications",
        "link": "explore/publications.html",
        "description": "Research publications about and using the DSF"
      },
      {
        "title": "Awards",
        "link": "explore/awards.html",
        "description": "Awards received by the DSF project"
      },
      {
        "title": "Security Policy",
        "link": "security/",
        "description": "Security disclosure policy"
      },
      {
        "title": "GitHub Repository",
        "link": "https://github.com/datasharingframework/dsf",
        "description": "Source code of the DSF"
      }
    ]
  },
  {
    "heading": "Optional",
    "pages": [
      {
        "title": "Process Plugin Development API v1",
        "link": "process-development/api-v1/",
        "description": "Legacy API v1 documentation (superseded by API v2)"
      },
      {
        "title": "Old DSF Versions",
        "link": "operations/old-versions.html",
        "description": "Documentation for older DSF versions (v1.x)"
      },
      {
        "title": "News",
        "link": "news/",
        "description": "News and blog posts about the DSF"
      }
    ]
  }
];

// Additional pages included in llms-full.txt only (not in the concise llms.txt
// index). These keep the full-text export comprehensive without cluttering the
// curated index. Descriptions are optional here since they are not rendered.
export const fullExtra: LlmsPage[] = [
  { title: "DSF for your project", link: "for-you/" },
  { title: "How to implement your use-case", link: "for-you/learn.html" },
  { title: "Operations Overview", link: "operations/latest/" },
  { title: "BPE Reverse Proxy", link: "operations/latest/bpe-reverse-proxy/" },
  { title: "BPE Server", link: "operations/latest/bpe/" },
  { title: "BPE FHIR Client Connections", link: "operations/latest/bpe/fhir-client-connections.html" },
  { title: "BPE Logging", link: "operations/latest/bpe/logging.html" },
  { title: "FHIR Reverse Proxy", link: "operations/latest/fhir-reverse-proxy/" },
  { title: "FHIR Server", link: "operations/latest/fhir/" },
  { title: "FHIR Logging", link: "operations/latest/fhir/logging.html" },
  { title: "Install Plugins", link: "operations/latest/install-plugins.html" },
  { title: "Sequence Flow", link: "process-development/api-v2/bpmn/sequence-flow.html" },
  { title: "Activities", link: "process-development/api-v2/dsf/activities.html" },
  { title: "Draft Task Resources", link: "process-development/api-v2/dsf/draft-task-resources.html" },
  { title: "Environment Variables", link: "process-development/api-v2/dsf/environment-variables.html" },
  { title: "Message Activities", link: "process-development/api-v2/dsf/message-activities.html" },
  { title: "Messaging", link: "process-development/api-v2/dsf/messaging.html" },
  { title: "Organization Identifiers", link: "process-development/api-v2/dsf/organization-identifiers.html" },
  { title: "Read Access Tag", link: "process-development/api-v2/dsf/read-access-tag.html" },
  { title: "Requester and Recipient", link: "process-development/api-v2/dsf/requester-and-recipient.html" },
  { title: "Target and Targets", link: "process-development/api-v2/dsf/target-and-targets.html" },
  { title: "Versions, Placeholders and URLs", link: "process-development/api-v2/dsf/versions-placeholders-urls.html" },
  { title: "Empty Process Plugin", link: "process-development/api-v2/tooling/empty-process-plugin.html" },
  { title: "DSF IDE", link: "process-development/api-v2/tooling/ide.html" },
  { title: "Maven Central and Resources", link: "process-development/api-v2/tooling/maven.html" },
  { title: "Pipeline Testing", link: "process-development/api-v2/tooling/pipeline-testing.html" },
];
