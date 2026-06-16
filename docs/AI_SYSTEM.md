# AI Clinic OS - AI System

## AI Components

The platform contains 3 AI systems:

### 1. AI Chat

Purpose:

- Answer user questions
- Explain documents
- General clinic assistance

Cannot:

- Modify data
- Book appointments
- Execute actions

### 2. RAG Knowledge Base

Purpose:

- Search uploaded documents
- Retrieve relevant information
- Provide source citations

Pipeline:

Document Upload
-> Text Extraction
-> Chunking
-> Embedding Generation
-> Vector Storage
-> Semantic Search
-> LLM Response

### 3. AI Agent

Purpose:

Perform actions using tools.

Examples:

- Book appointment
- Cancel appointment
- Find available doctor
- Generate visit note
- Summarize patient history

Agent Flow:

User Request
-> Intent Detection
-> Tool Selection
-> Tool Execution
-> Confirmation
-> Action Log


## AI Agent Tools

The AI Agent can only interact with the system through approved tools.

### Appointment Tools

- findDoctorAvailability
- createAppointment
- cancelAppointment
- rescheduleAppointment

### Patient Tools

- getPatientSummary
- getPatientHistory
- generateVisitNote

### Document Tools

- searchDocuments
- summarizeDocument

### Analytics Tools

- getClinicMetrics

## Security Rule

The AI Agent cannot access the database directly.

The AI Agent can only execute approved tools.

Every tool execution must be logged.

## Tool Execution Flow

User Request
-> Agent
-> Tool Selection
-> Permission Check
-> Tool Execution
-> Audit Log
-> Response