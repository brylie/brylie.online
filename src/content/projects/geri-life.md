---
title: "GeriLife"
description: "Promoting wellness and independence for older adults by helping coordinate care and support."
url: "https://github.com/GeriLife"
githubUrl: "https://github.com/GeriLife"
category: "software"
featured: true
status: "completed"
datePublished: "2025-03-07"
tags:
  - "health"
  - "wellness"
  - "aging"
  - "open source"
technologies:
  - "JavaScript"
  - "Meteor.js"
  - "Vue.js"
  - "CSS"
  - "MongoDB"
  - "Plotly.js"
slug: "geri-life"
---

# GeriLife: Transforming Elder Care Through Data-Driven Insights

## Background and Motivation

The story of GeriLife began in 2015 when I identified a critical gap in elder care systems alongside my co-founder Marjo, an experienced administrator at a large elder-care campus. Marjo's extensive industry experience and deep understanding of elder care practices provided the domain expertise that was essential to the project's success. Together, we recognized that care facilities struggled with inconsistent quality of care and limited visibility into residents' wellbeing. Family members often felt disconnected from their loved ones' daily experiences, and facility managers lacked tools to systematically track and improve quality of life for residents.

Traditional approaches to resident wellbeing relied heavily on anecdotal information and guesswork. There was no cohesive system to track engagement, preferences, or emotional states across time. Care staff, already overburdened with responsibilities, found it challenging to facilitate wellbeing activities for all residents equally.

This reality inspired the creation of GeriLife—a comprehensive wellbeing platform designed to transform how elder care communities understand and enhance resident quality of life. The vision was to develop a system that could provide actionable insights at multiple levels: from individual care planning to facility-wide programming to system-level resource allocation.

## Development Process

As co-founder and technical lead, I approached the development of GeriLife in close partnership with Marjo, whose community connections and healthcare administration expertise complemented my technical background. This interdisciplinary collaboration was crucial to the project's success and allowed us to develop the tool directly with the nurses and care staff who would ultimately use it.

The development process was significantly enhanced through our trial project with the City of Tampere, Finland. This partnership provided us with invaluable access to real-world care environments and created a collaborative ecosystem where technology development was guided by practitioners' needs and experiences.

We began with extensive stakeholder interviews, shadowing care providers, and collaborating with elder care experts to understand the nuances of wellbeing in residential care settings. Marjo's leadership was instrumental in facilitating these relationships and ensuring that the technical solutions we developed were grounded in the practical realities of elder care.

The technical architecture was built on JavaScript, using Meteor as the full-stack framework to enable real-time data synchronization across devices. This was critical for a care environment where multiple staff members needed to access and update information simultaneously. For the frontend, we developed a mobile-first interface that accommodated remote use during activities. This design choice was purposeful—enabling care providers to document engagement in the moment rather than trying to recall details hours later.

The data model required careful consideration to balance comprehensiveness with usability. The final design captured both qualitative emotional metrics (how residents were feeling) and quantitative engagement measurements (minutes spent in various wellness activities such as nature experiences, art, music, and cultural events). The system also tracked contextual factors such as activity facilitator roles (volunteer, staff, or family member), providing valuable insights into residents' social connections.

The development process followed an iterative approach, with regular feedback cycles incorporating input from care providers, administrators, and when possible, residents themselves. Each cycle refined both the user interface and the analytics capabilities, gradually building a system that could transform raw activity data into meaningful wellbeing insights.

## Challenges and Solutions

Creating an effective wellbeing analytics platform for elder care presented several significant challenges:

**Balancing data capture with ease of use** was perhaps the most fundamental challenge. Care staff had limited time for documentation, yet comprehensive data was essential for meaningful analytics. The solution involved designing an interface that minimized input time while maximizing data quality. I implemented a streamlined workflow that allowed staff to document activities in under one minute, even while actively engaging with residents.

**Designing meaningful visualizations for diverse stakeholders** required careful consideration of different information needs. A care provider needed resident-specific details, while a facility director needed aggregate trends. I developed a multi-layered reporting system using D3.js that could automatically generate appropriate visualizations based on user role. For direct care providers, the system highlighted individual resident preferences and patterns. For management, it presented facility-wide engagement metrics and identified residents at risk of social isolation.

**Ensuring data privacy while enabling meaningful sharing** presented another complex challenge. Resident wellbeing data contained sensitive information but needed to be accessible to authorized parties including family members. The solution involved implementing granular access controls and comprehensive audit logging, ensuring information was accessible only to authorized individuals while maintaining complete accountability for all system interactions. We also used the GDPR principle of data minimization by only collecting necessary data in a semi-anonymous manner.

**Creating a system that supported equity in care delivery** was a priority from the beginning. Early prototypes revealed that certain residents received disproportionate attention based on factors like sociability or location within the facility. To address this, I developed visualization tools that highlighted participation gaps, ensuring no resident was inadvertently excluded from activities. The system also tracked which residents were consistently declining participation, prompting staff to investigate potential barriers or preferences.

## Impact and Outcomes

Over its decade of development and implementation, GeriLife transformed wellbeing assessment and care planning across multiple elder care communities. The impact extended to several key dimensions:

The platform enabled evidence-based care planning by providing objective data on resident preferences and engagement patterns. Care homes reported enhanced communication between staff shifts and more personalized activity programming tailored to individual interests and needs. This systematic approach to wellbeing assessment led to measurable improvements in resident satisfaction and engagement levels.

Family connection improved significantly as the platform provided transparency into daily activities. Family members gained visibility into their loved ones' engagement and emotional wellbeing, fostering greater trust in the care being provided.

On a management level, GeriLife provided unprecedented visibility into wellbeing metrics across facilities. Administrators could identify homes with consistently lower engagement levels and direct resources accordingly. This system-wide perspective enabled more equitable resource allocation and targeted quality improvement initiatives.

Perhaps most significantly, the data collected through GeriLife enabled organizations to identify and share best practices across facilities. Activities that consistently generated positive emotional responses could be replicated, while those with limited impact could be revised or replaced. This data-driven approach to programming led to more effective use of limited resources and better outcomes for residents.

Our partnership with the City of Tampere, Finland, proved particularly valuable, as it allowed us to implement and refine GeriLife across multiple facilities within a coordinated municipal framework. This city-wide implementation provided rich comparative data and demonstrated the system's scalability in a real-world healthcare context.

## Personal Reflections

Leading the development of GeriLife from concept to implementation over a decade was both technically challenging and profoundly rewarding. The project confirmed my belief that thoughtfully designed technology can address complex human challenges, particularly when developed in close collaboration with the people who will use it.

What began as a technical solution evolved into a transformation of care practices. By making wellbeing data visible and actionable, GeriLife changed how care providers, administrators, and family members thought about quality of life in elder care. The system highlighted the importance of diverse engagement opportunities, social connections, and individual choice—factors that might otherwise remain unmeasured and therefore undervalued.

From a technical perspective, the project reinforced the importance of designing data systems that serve human needs rather than merely collecting information. Every technical decision—from database structure to visualization approach—was evaluated based on how it would ultimately impact residents' experience of care.

Throughout the decade of development, I learned that the most meaningful technology often exists at the intersection of complex technical challenges and fundamental human needs. GeriLife required sophisticated data engineering and analytics, but its value came from addressing the very human desire to ensure our elders live with dignity, engagement, and joy.

The partnership with Marjo exemplified the power of combining technical expertise with domain knowledge. Her understanding of elder care administration and her connections within the community were essential complements to my technology background. This collaboration allowed us to develop GeriLife in direct partnership with the nurses and staff who would ultimately use it, ensuring the system addressed real needs rather than assumed ones.

Our city-wide trial with the City of Tampere further demonstrated the importance of institutional partnerships in healthcare innovation. Having municipal support created opportunities for implementation and feedback that would have been impossible to achieve independently.

The experience of creating GeriLife has shaped my approach to all subsequent projects, instilling a commitment to building technology that makes complex information accessible, actionable, and ultimately transformative for the communities it serves—and reinforcing my belief in the necessity of interdisciplinary collaboration when developing solutions for complex human systems.
