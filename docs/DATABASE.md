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