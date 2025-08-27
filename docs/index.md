---
layout: home
title: Rholang - Concurrent Language for Blockchain
nav_exclude: true
description: "Rholang is a reflective higher-order concurrent programming language designed for blockchain and distributed computing."
permalink: /
---

# Rholang Documentation
{: .fs-9 }

A reflective higher-order concurrent programming language for blockchain and distributed systems.
{: .fs-6 .fw-300 }

[Get started now](#getting-started){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 }
[View on GitHub](https://github.com/rholang){: .btn .fs-5 .mb-4 .mb-md-0 }

---

## Welcome to Rholang

Rholang is a fully concurrent programming language built on the reflective higher-order calculus. It's designed from the ground up to handle the complexities of distributed systems and blockchain applications, offering a unique approach to concurrent programming that prevents common issues found in traditional smart contract languages.

## Key Features

### Concurrent by Design
Unlike traditional languages that add concurrency as an afterthought, Rholang is concurrent at its core. Every computation happens in parallel unless explicitly synchronized.

### Reflective Higher-Order
Rholang's reflective nature allows programs to inspect and modify their own structure, enabling powerful metaprogramming capabilities essential for blockchain applications.

### Built for Blockchain
Designed to prevent issues like the Ethereum DAO bug, Rholang provides formal verification capabilities and a clear concurrency model that makes reasoning about smart contracts straightforward.

### Scalable Architecture
Using a Directed Acyclic Graph (DAG) structure and Proof of Stake consensus, Rholang-based systems can achieve high throughput while maintaining security.

## Quick Example

```rholang
new helloWorld, stdout(`rho:io:stdout`) in {
  contract helloWorld(@name) = {
    stdout!(["Hello, ", name, "!"])
  } |
  helloWorld!("World")
}
```

This simple example demonstrates:
- Creating new channels with `new`
- Defining contracts that listen on channels
- Concurrent execution with the `|` operator
- Pattern matching with `@name`

## Getting Started

Ready to dive in? Start with our [Getting Started Guide]({{ '/learn/getting-started/' | relative_url }}) to:

1. Install Rholang development tools
2. Set up your development environment
3. Write your first Rholang program
4. Understand the basics of concurrent programming in Rholang

## Documentation Structure

<div class="grid">
  <div class="grid-item">
    <h3>Getting Started</h3>
    <p>Installation, setup, and your first Rholang program</p>
  </div>
  <div class="grid-item">
    <h3>Language Guide</h3>
    <p>Complete reference for Rholang syntax and semantics</p>
  </div>
  <div class="grid-item">
    <h3>Tutorials</h3>
    <p>Step-by-step guides for building real applications</p>
  </div>
  <div class="grid-item">
    <h3>API Reference</h3>
    <p>Standard library and system API documentation</p>
  </div>
</div>

## Community

Join the Rholang community to get help, share ideas, and contribute:

- **GitHub**: [github.com/rholang](https://github.com/rholang)
- **Discord**: Join our developer community
- **Forum**: Discussion and support

## Contributing

Rholang is open source and welcomes contributions! Whether you're fixing bugs, improving documentation, or proposing new features, check out our [Contributing Guide](contributing.md) to get started.

---

<small>This documentation is continuously updated. Last modified: {{ "now" | date: "%Y-%m-%d" }}</small>