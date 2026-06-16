# AI Clinic OS - Database Design

## Core Entities

### Identity

- users
- sessions

### Multi-Tenancy

- clinics
- clinic_memberships

### Authorization

- roles
- permissions
- role_permissions

### Medical

- patients
- doctors
- doctor_schedules
- appointments

### Documents & AI

- documents
- document_chunks
- document_embeddings

### Chat & Agent

- chat_sessions
- chat_messages
- agent_actions
- agent_tool_calls

### System

- notifications
- audit_logs

### Analytics

- analytics_events


## Multi-Tenancy Rule

AI Clinic OS uses clinic-based multi-tenancy.

Every clinic-owned table must include:

- clinic_id

Clinic-owned tables:

- clinic_memberships
- patients
- doctors
- doctor_schedules
- appointments
- documents
- document_chunks
- document_embeddings
- chat_sessions
- chat_messages
- agent_actions
- agent_tool_calls
- notifications
- audit_logs
- analytics_events

Rule:

All backend queries for clinic-owned data must filter by clinic_id.

Example:

A doctor from Clinic A can only access patients where:

clinic_id = Clinic A


## Relationship Design

### User -> Clinic

Users belong to clinics through memberships.

Relationship:

User
-> Clinic Membership
-> Clinic

Reason:

A user may belong to multiple clinics.

Examples:

- Doctor works in multiple clinics
- Receptionist supports multiple clinics
- Future consultant roles


### Doctor <-> Patient

Relationship:

Doctor
-> Appointments
<- Patient

Reason:

Doctors and patients are connected through appointments.

A patient may visit multiple doctors.

A doctor may treat multiple patients.

Cardinality:

Doctor
-> Many Appointments

Patient
-> Many Appointments

Appointment
-> One Doctor
-> One Patient



### Doctor -> Doctor Schedules

Relationship:

Doctor
-> Doctor Schedules

Reason:

A doctor can have multiple working time slots.

Appointments must be checked against doctor schedules before booking.

Cardinality:

One Doctor
-> Many Doctor Schedules

### Clinic -> Doctors

Relationship:

Clinic
-> Doctors

Reason:

Doctors operate within a clinic.

Schedules, appointments, analytics, and permissions are managed per clinic.

Cardinality:

One Clinic
-> Many Doctors



### Clinic -> Documents

Relationship:

Clinic
-> Documents

Reason:

Documents belong to a clinic.

The RAG system must only search documents belonging to the current clinic.

Cardinality:

One Clinic
-> Many Documents


### Document -> Chunks -> Embeddings

Relationship:

Document
-> Document Chunks
-> Document Embeddings

Reason:

Documents are split into chunks.

Each chunk receives an embedding vector for semantic search.

Cardinality:

One Document
-> Many Chunks

One Chunk
-> One Embedding


### Chat Session -> Chat Messages

Relationship:

Chat Session
-> Chat Messages

Reason:

Conversations are grouped into sessions.

A session contains multiple user and AI messages.

Cardinality:

One Chat Session
-> Many Chat Messages


### Chat Session -> Agent Actions

Relationship:

Chat Session
-> Agent Actions

Reason:

Agent actions must be linked to the conversation that triggered them.

Examples:

- Appointment booking
- Appointment cancellation
- Visit note generation
- Patient summary generation

Cardinality:

One Chat Session
-> Many Agent Actions


### Agent Action -> Tool Calls

Relationship:

Agent Action
-> Tool Calls

Reason:

An agent action may require multiple tool executions.

Examples:

Book Appointment:

- findDoctorAvailability
- createAppointment
- sendNotification

Cardinality:

One Agent Action
-> Many Tool Calls