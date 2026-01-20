---
title: "Tapio"
description: "RAG-powered chatbot helping immigrants navigate Finnish bureaucracy"
longDescription: "Production RAG system for extracting, processing, and querying Finnish immigration information. Complete pipeline from web crawling through semantic search to interactive chatbot interface. Built with LangChain, ChromaDB, and local LLM integration."
url: "https://github.com/brylie/tapio"
githubUrl: "https://github.com/brylie/tapio"
category: "software"
featured: true
status: "completed"
datePublished: "2024-08-15"
tags:
  - "AI"
  - "ML"
  - "LLM"
  - "immigration"
  - "information access"
  - "open source"
technologies:
  - "Python"
  - "LangChain"
  - "ChromaDB"
  - "Ollama"
  - "HuggingFace"
  - "Gradio"
slug: "tapio"
---

# Tapio: Making Finnish Immigration Information Accessible Through RAG

## Background and Motivation

After living in Finland for over a decade as an immigrant, I've experienced firsthand the challenge of navigating Finnish bureaucracy. Critical information about residence permits, work authorization, family reunification, and public services is scattered across government websites in dense legal language. For many immigrants, particularly those still developing Finnish language skills, finding accurate answers to urgent questions can be overwhelming.

This struggle is shared by my immigrant friends across different situations: students seeking education information, workers exploring employment options, families pursuing reunification, and refugees needing guidance through asylum processes. We all face the same fundamental problem: important information exists, but it's difficult to find, understand, and apply to specific circumstances.

The Finnish Immigration Service (Migri) website contains comprehensive information, but its structure assumes familiarity with Finnish administrative systems and terminology. Simple questions like "Can my spouse work while we wait for their residence permit?" or "What documents do I need for family reunification?" often require reading multiple pages and cross-referencing complex regulations.

I built Tapio to address this information access gap. Rather than replacing official sources, Tapio makes existing information more accessible by allowing natural language queries that retrieve relevant content and provide conversational guidance. The name Tapio comes from Finnish mythology, the forest god who guides travelers through unknown territory—an apt metaphor for helping immigrants find their way through bureaucratic complexity.

## The Solution

Tapio is a production RAG (Retrieval Augmented Generation) system that extracts, processes, and makes searchable the information from Finnish government websites like Migri.fi. The system provides conversational access to immigration information through a complete pipeline: web crawling, content parsing, vectorization, and interactive chatbot interface.

**Core capabilities:**

- **Web crawling**: Configurable crawling of government sites with depth and domain restrictions
- **Content parsing**: Extraction and cleaning of relevant information from HTML
- **Semantic search**: ChromaDB vector database enabling retrieval of contextually relevant content
- **Local LLM integration**: Ollama for privacy-focused local inference without sending queries to external services
- **Interactive chatbot**: Gradio web interface for natural language questions
- **Multi-database support**: Abstraction layer supporting ChromaDB, Pinecone, pgvector, and Astra DB

**Target users:**

- EU and non-EU citizens navigating Finnish immigration processes
- Students, workers, families, refugees, and asylum seekers
- Anyone needing to understand Finnish residence permits, work authorization, or public services

**How it helps:**
Rather than searching through multiple government pages, users can ask questions in natural language: "What happens if my residence permit expires while I'm waiting for renewal?" The system retrieves relevant passages and provides conversational guidance based on official information.

## Technical Implementation

### Architecture: Production RAG Pipeline

Tapio implements a complete RAG workflow using the LangChain framework:

**Pipeline stages:**

1. **Web Crawling**: Configurable crawler for Finnish government sites
2. **Content Parsing**: HTML cleaning and text extraction
3. **Text Splitting**: LangChain text splitters for optimal chunk sizes
4. **Vectorization**: HuggingFace embeddings for semantic representation
5. **Storage**: Vector database with semantic search capabilities
6. **Retrieval**: Context-aware content retrieval based on queries
7. **Generation**: Local LLM inference with retrieved context
8. **Interface**: Interactive chatbot with Gradio

### Key Technical Decisions

**LangChain Framework**
Chose LangChain for production-grade RAG patterns rather than building from scratch. The framework provides:

- Proven text splitting strategies for optimal chunk sizes
- Built-in embedding integration (HuggingFace)
- Chain orchestration for retrieval and generation
- Extensible architecture for different LLM backends

**Local LLM with Ollama**
Privacy was a critical requirement. Immigration questions can be sensitive (asylum cases, family situations, legal status). Using Ollama for local inference means:

- No query data sent to external services
- Complete privacy for users
- No API costs or rate limits
- Works offline once models are downloaded

**Multi-Database Abstraction**
Built an abstraction layer supporting multiple vector databases:

- **ChromaDB**: Default option, easy local setup
- **Pinecone**: Cloud-hosted option for scaling
- **pgvector**: PostgreSQL extension for existing infrastructure
- **Astra DB**: Managed DataStax option

This flexibility allows deployment in different environments (local development, cloud hosting, enterprise infrastructure) without rewriting core logic.

**HuggingFace Embeddings**
Used HuggingFace models for text embeddings rather than OpenAI for consistency with the privacy-focused approach. Embeddings run locally, maintaining the zero-external-dependency principle.

### Engineering Practices

**Production-grade approach:**

- **Comprehensive testing**: pytest suite covering pipeline stages
- **Type checking**: mypy for static type validation
- **Code quality**: ruff and pre-commit hooks for consistency
- **Modern Python tooling**: uv for dependency management
- **Modular architecture**: Clean separation of crawling, parsing, vectorization, retrieval, and chat components

## Challenges and Solutions

### Balancing Comprehensiveness with Relevance

Government websites contain thousands of pages. Crawling everything creates noise; being too selective risks missing important information.

**Solution**: Configurable crawling with domain restrictions and depth limits. Start with core immigration information (Migri.fi residence permits section), then expand based on common question patterns. The modular architecture allows easy addition of new sources.

### Handling Complex Legal Language

Finnish immigration regulations use precise legal terminology that can be difficult to parse and represent in vector embeddings.

**Solution**: LangChain's text splitting preserves context around legal terms. The RAG approach provides actual source passages rather than paraphrasing, allowing users to see official wording. Chunking strategy balances preserving context with retrieval precision.

### Privacy for Sensitive Queries

Immigration questions often involve sensitive personal situations. Sending queries to external LLM APIs creates privacy concerns.

**Solution**: Complete local inference pipeline with Ollama. No query data leaves the user's machine. Trade-off is requiring local compute resources, but privacy benefits outweigh convenience for this use case.

### Maintaining Accuracy

RAG systems can hallucinate or misinterpret information. Immigration guidance requires accuracy.

**Solution**: System returns source passages with citations, allowing users to verify information against official sources. Prompts emphasize providing retrieved information rather than generating new claims. Users see both the chatbot response and the source chunks it's based on.

## Development Status

### What Was Built

**Complete RAG pipeline:**

- Web crawler for Finnish government sites
- HTML parser and text extraction
- Vectorization with HuggingFace embeddings
- Vector database integration (multiple options)
- Local LLM inference with Ollama
- Interactive Gradio chatbot interface
- Comprehensive test suite
- Type-checked codebase with quality gates

**Demonstrated capabilities:**

- Extract and process immigration information from Migri.fi
- Build searchable knowledge base with semantic retrieval
- Provide conversational access to official information
- Maintain privacy with local inference
- Deploy in different environments with database flexibility

### Current Status

The technical implementation is complete and functional. The system successfully demonstrates end-to-end RAG capabilities from web crawling through conversational queries. The codebase represents production-grade engineering practices including comprehensive testing, type checking, and modular architecture.

**Why development paused:**
I built Tapio while starting a demanding new role, leading to overextension and burnout. Additionally, being contacted by scammers made me reconsider the project's direction and the responsibility of providing immigration guidance.

**Technical value:**
Despite pausing active development, Tapio demonstrates complete RAG system implementation with production engineering practices. The project proves capability beyond tutorials: building modular architectures, integrating multiple technologies (LangChain, vector databases, local LLMs), and maintaining code quality through testing and type checking.

**Repository status:**
Code is available on GitHub as an example of production RAG implementation. The technical work is solid and could be valuable for others building similar information access systems or learning RAG architecture patterns.

## Personal Reflections

Building Tapio taught me several important lessons about AI application development and personal sustainability.

**Technical insights:**
The RAG pattern is powerful for information access problems. Rather than training custom models or fine-tuning, combining semantic search with LLM generation provides accurate, verifiable responses grounded in source material. The modular architecture (separating crawling, vectorization, retrieval, and generation) makes the system maintainable and extensible. Choosing local inference with Ollama proved the right decision for privacy-sensitive applications, even at the cost of convenience.

**Personal insights:**
The experience reinforced the importance of sustainable commitments. Building a startup-level project while starting a demanding new job led to burnout. I learned to be more thoughtful about work-life balance and to recognize when I'm overextending myself. Setting boundaries around side projects is necessary for long-term productivity and wellbeing.

**Project value:**
While I paused development, the technical work demonstrates real capability. The complete pipeline from web crawling through conversational interface shows end-to-end system thinking. The production engineering practices (testing, type checking, modular design) prove I can build maintainable AI applications, not just experiments.

The project remains valuable as a technical demonstration and potentially as a foundation for others tackling similar information access challenges. The core insight—that RAG can make bureaucratic information more accessible to those who need it most—remains valid even if I'm not actively developing this specific implementation.
