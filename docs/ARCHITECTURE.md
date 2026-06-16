# AI Clinic OS - Architecture

## Phase 1 - System Design

## User Roles

The system will support 5 user roles:

1. SUPER_ADMIN
   - Controls the whole SaaS platform.
   - Manages all clinics.
   - Views platform-level analytics.

2. CLINIC_ADMIN
   - Controls one clinic.
   - Manages clinic members, doctors, receptionists, patients, and documents.

3. DOCTOR
   - Views assigned patients.
   - Manages appointments.
   - Uses AI to summarize patient history and generate visit notes.

4. RECEPTIONIST
   - Manages appointments.
   - Registers patients.
   - Uses AI agent for scheduling support.

5. PATIENT
   - Logs into the platform.
   - Books appointments.
   - Views own history.
   - Uses clinic AI assistant.
   - Uploads own medical documents.

## Decision

Patients will have login access.

## Core Modules

1. Authentication
2. Users
3. Clinics
4. Memberships
5. Roles & Permissions

6. Patients
7. Doctors
8. Doctor Schedules
9. Appointments

10. Documents
11. RAG Knowledge Base

12. AI Chat
13. AI Agent

14. Notifications
15. Analytics
16. Audit Logs
17. Admin



## Permission Strategy

Permissions follow the pattern:

resource:action

Examples:

patients:read
patients:create
patients:update
patients:delete

appointments:read
appointments:create
appointments:update
appointments:cancel

documents:upload
documents:read

ai:chat
ai:agent

analytics:read

admin:manage

## Role Permissions

SUPER_ADMIN
- Full access

CLINIC_ADMIN
- Full access inside own clinic

DOCTOR
- Read/update assigned patients
- Manage appointments
- Use AI features

RECEPTIONIST
- Manage appointments
- Register patients
- Use scheduling tools

PATIENT
- Access own data only
- Upload documents
- Use clinic AI assistant