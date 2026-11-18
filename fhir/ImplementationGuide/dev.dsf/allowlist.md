# Allowlist - Data Sharing Framework (DSF) Implementation Guide v2.0.0

* [**Table of Contents**](toc.md)
* **Allowlist**

## Allowlist

The DSF (Data Sharing Framework) uses **allow lists** to control and restrict interactions between FHIR servers. The primary goal is to ensure that **only authorized organizations** can perform specific actions — such as starting a process instance — and only within the limits explicitly permitted.

### Core Concepts

To achieve this, each DSF FHIR server must:

1. **Define trusted organizations**
Maintain a list of external organizations that are trusted to participate in defined workflows.
1. **Verify organizational membership**
Ensure that a communicating system belongs to a trusted parent organization (e.g. a research consortium or institution).
1. **Specify allowed actions**
Determine which roles and operations a trusted organization is permitted to perform in a given context.

### Allow List Resources

Allow lists in DSF are built using standard FHIR resources:

* `Organization`: Represents a participating entity (e.g. a hospital, research institute).
* `Endpoint`: Describes how to technically reach an organization (e.g. base URL for its FHIR server).
* `OrganizationAffiliation`: Describes relationships between organizations, such as membership in consortia or assignment of specific roles.

Together, these resources define:

* **Communication partners**: Which external systems are allowed to send or receive messages.
* **Parent organizations**: Higher-level entities (e.g. consortia) that authorize affiliated members.

To enforce **Role-based permissions**, so what actions an organization is allowed to perform in a given use case, please read the [ActivityDefinition page](./activitydefinition.md).

### Local Control and Enforcement

Each DSF FHIR server maintains and enforces its **own allow list**. This means that:

* Trust and permissions are **locally configured**.
* An organization must appear on the local allow list of a partner server to be recognized as a valid communication party.
* Without a valid allow list entry, **process execution and reading data will be rejected**.

In summary, allow lists serve as a decentralized trust and access control mechanism within the DSF ecosystem, ensuring secure and well-defined communication between authorized participants.

