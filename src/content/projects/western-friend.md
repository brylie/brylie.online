---
title: "WesternFriend.org"
description: "A website for Western Friend (westernfriend.org), a Quaker publication that provides resources and support for Quaker communities and individuals seeking to live out their faith in the world. Western Friend is part of the Religious Society of Friends."
url: "https://westernfriend.org/"
category: "software"
featured: true
status: "active"
datePublished: "2025-01-01"
dateStarted: "2014-01-01"
tags:
  - "Quaker"
  - "Religious Society of Friends"
  - "publication"
  - "nonprofit"
  - "digital publishing"
  - "content management"
  - "community"
  - "archive"
technologies:
  - "Python"
  - "Django"
  - "WagtailCMS"
  - "JavaScript"
  - "CSS"
  - "PostgreSQL"
  - "Pandas"
  - "HTML"
  - "Bootstrap"
githubUrl: "https://github.com/WesternFriend/westernfriend.org"
slug: "western-friend"
---

# Western Friend: Transforming a Quaker Publication's Digital Presence Through Elegant Technology

## Background and Motivation

My journey with Western Friend began in 2013 while I was living in California, before my eventual move to Finland. What started as volunteer work quickly evolved into a deeply meaningful technological partnership that has continued for over a decade. Western Friend is a Quaker publication serving the Religious Society of Friends' communities primarily in the western United States, providing vital spiritual resources, community connections, and thought-provoking content for readers seeking to live out their faith principles in everyday life.

In 2014, I began regular collaboration with then-editor Mary Klein (and later with Caitlin, who took over editorship in early 2025), meeting almost weekly to discuss the publication's digital transformation. Our initial assessment revealed a growing need for a comprehensive online platform that could serve multiple functions: hosting an online magazine with a robust subscription model, processing donations, selling books through an e-commerce system, maintaining a multimedia library, providing a community calendar, and hosting a directory of Quaker meetings throughout the western United States.

The existing website lacked the infrastructure to support these diverse needs, prompting us to begin a thoughtful exploration of content management systems that could accommodate such a multifaceted online presence. After researching available options, we initially settled on Drupal, which at the time offered the flexibility and feature set that seemed best aligned with Western Friend's complex requirements.

## Initial Development and Challenges

The first phase of our digital transformation centered on implementing a Drupal-based solution integrated with CiviCRM, an open-source constituent relationship management system designed specifically for nonprofits. This combination initially served Western Friend well, enabling us to build out the key features identified during our requirements gathering process: digital magazine access with subscription management, donation processing, e-commerce capabilities, media library functions, and community resources.

However, as time progressed, limitations and challenges with this technical architecture began to emerge. The Drupal implementation increasingly felt like a "black box" — opaque and difficult to troubleshoot when issues arose. This opacity became particularly problematic when the time came to upgrade to newer major releases of Drupal. The integration between Drupal and CiviCRM created additional complexities, as the CRM solution wasn't always compatible with the latest Drupal releases, resulting in a fragile technical ecosystem that became increasingly difficult to maintain.

After several years of managing an increasingly problematic system plagued by mysterious bugs and technical debt, we reached a critical decision point. We could either invest significant resources in a major multi-version Drupal upgrade with uncertain outcomes, or we could explore alternative solutions that might better serve Western Friend's mission and technical needs moving forward. This challenge presented an opportunity to reassess our technological approach and consider what would best support the publication's work in the long term.

## Discovering Wagtail and Technical Rebirth

Our search for alternatives led us to explore Python-based content management solutions, particularly Django CMS and Wagtail CMS. Wagtail immediately stood out due to several compelling attributes that aligned with our evolving vision for Western Friend's digital presence.

Wagtail's design philosophy emphasized an elegant user experience inspired by WordPress's accessibility while leveraging Django's robust framework. The CMS offered comprehensive documentation that made evaluation and exploration straightforward. Most importantly, even in our initial assessment, we could see that Wagtail would likely provide a streamlined and enjoyable developer experience — a crucial consideration for a project maintained largely through volunteer efforts.

Another significant factor in our decision was Torchbox, the company behind Wagtail CMS. As an employee-owned company with a clear commitment to building digital solutions for nonprofits and mission-driven organizations, Torchbox's values closely aligned with Western Friend's ethos. Their portfolio included websites for notable nonprofits and social impact organizations, demonstrating both technical excellence and a genuine understanding of the unique needs of values-based communities. This alignment between Torchbox's mission and Western Friend's Quaker principles offered reassurance that the CMS would continue to evolve in directions that would serve our community's needs. The fact that we could adopt a tool built by an organization with compatible values added another layer of integrity to our technical decision-making process.

The decision to migrate from Drupal/CiviCRM to Wagtail represented more than just a technical change; it reflected a philosophical shift toward simplicity, maintainability, and developer joy. We developed a multi-year migration plan that would allow us to methodically recreate and enhance Western Friend's digital ecosystem while minimizing disruption to the publication's operations and community.

Our implementation strategy focused on recreating the core functionality of the Drupal website — the magazine subscription system, e-commerce bookstore, multimedia library, and extensive archive of public domain issues dating back to 1929 — while intentionally leaving behind the CRM functions of CiviCRM. For payment processing and donation management, we maintained the same payment processor but simplified our integration, moving most payment logic to the processor's interface. This "thin integration" approach allowed us to focus development efforts on Western Friend's most distinctive features rather than reinventing payment processing infrastructure.

One of the most technically challenging aspects of the project was developing bespoke migration scripts to transfer content from Drupal to Wagtail. Drupal's flexibility allows for arbitrarily complex data models, and while Wagtail also supports custom data structures, the translation between these two systems required considerable effort. We created custom migration code that utilized pandas DataFrames to process CSVs exported through Drupal's view plugins—which themselves proved somewhat buggy and unreliable. The process involved careful data cleaning, mapping content types between systems, preserving relationships between content pieces, and ensuring media assets transferred correctly. This migration work, though largely invisible to end users, was critical to the project's success as it allowed us to fully populate the new Wagtail site before going live. This staging approach meant we could thoroughly test the new system with real content and ensure a seamless transition for Western Friend's community. The investment in a comprehensive migration strategy paid off in maintaining continuity of access to decades of valuable content while providing it through a more sustainable technical platform.

## Development Process and Values

The migration and development process stretched over several years, partly due to the part-time nature of the work. As a largely volunteer effort conducted during evenings and weekends, progress came in steady iterations rather than rapid deployment. I typically devoted a few hours each week to the project, balancing this commitment with my other professional responsibilities.

Despite its gradual pace, this development model produced some unexpected benefits. The extended timeline allowed for thoughtful consideration of features and architectural decisions, creating space for user feedback and refinement throughout the development process. Rather than rushing to replace all functionality at once, we could prioritize features based on community needs and implement them with careful attention to detail.

Working with Wagtail proved to be one of the most satisfying development experiences of my career. The framework's clean architecture, sensible defaults, and developer-friendly approach made the technical implementation a joy rather than a burden. Each new release of Wagtail brought additional features and experience improvements while maintaining strong backward compatibility. When breaking changes were necessary, Wagtail's clear deprecation policies provided ample notice and migration paths, making upgrades far less stressful than our previous experiences with Drupal.

This project reinforced and deepened my commitment to software craftsmanship as an ethical practice. The attention to detail required for a publication serving a faith community with deep values emphasized the importance of creating technology that embodies principles of simplicity, integrity, and community. Unlike some of my experiences in larger software-as-a-service organizations where delivery pressure often led to technical compromises, the Western Friend project allowed for a development approach where quality and clarity could take precedence.

## Impact and Outcomes

The new Western Friend website has transformed how this Quaker publication serves its community and fulfills its mission. The migration to Wagtail has delivered several significant benefits:

**Enhanced Content Management**: Editors can now manage magazine content, multimedia resources, and community information through an intuitive interface that requires minimal technical training. This has reduced dependency on technical volunteers for routine updates.

**Improved Subscription Experience**: The streamlined subscription management system makes it easier for readers to access digital content while providing the publication with more reliable recurring revenue. The system's simplicity has reduced administrative overhead and subscription management issues.

**Accessible Archives**: The implementation of a searchable digital archive extending back to 1929 has transformed access to Western Friend's historical content, making nearly a century of Quaker thought and discussion available to researchers, community members, and those exploring Quaker perspectives.

**Sustainable Technical Foundation**: Perhaps most importantly, the new technical architecture provides a stable, maintainable foundation that can evolve with the publication's needs. The clean separation of concerns and emphasis on simplicity means that future volunteers and staff can more easily understand and extend the system.

**E-commerce Integration**: The rebuilt bookstore functionality allows Western Friend to offer publications and resources while maintaining inventory and fulfillment processes through a straightforward interface that integrates with their existing workflows.

For the Western Friend community, these technical improvements translate to tangible benefits: more reliable access to content, easier ways to support the publication financially, and richer connections to both historical resources and current community information. The technology now serves as an enabler of the publication's mission rather than a source of ongoing challenges.

## Personal Reflections

My ongoing involvement with Western Friend has been among the most rewarding aspects of my professional life. This project exemplifies the kinds of technical work I find most meaningful — efforts that combine technical excellence with clear purpose and community benefit.

Working within the context of a faith-based publication has deepened my appreciation for technology that embodies values rather than just implementing features. The Quaker principles of simplicity, integrity, community, and equality have found expression not just in the content Western Friend publishes but in how we've approached the technical implementation itself. There's a satisfying alignment when the means of creating technology reflect the values the technology is meant to serve.

This experience has solidified my preference for working with nonprofit organizations where the impact of technology can be measured in community benefit rather than purely commercial terms. It has shown me that even with limited resources, thoughtful application of the right technologies can create sustainable solutions that serve organizations for years to come.

The contrast between this work and some of my experiences in larger commercial settings has been instructive. In environments where delivery speed often takes precedence over quality and maintainability, technical debt accumulates rapidly, ultimately requiring greater resources to manage complexity and troubleshoot issues. The Western Friend project has reinforced my belief that prioritizing simplicity, clarity, and craftsmanship from the beginning actually creates more sustainable and efficient solutions in the long run.

As I look forward to continuing this relationship with Western Friend, I'm excited about the possibilities for further refinement and enhancement of their digital presence. The solid foundation we've established with Wagtail provides a platform for ongoing innovation that can continue to serve the Quaker community with increasingly effective digital tools. This project has become a touchstone for me — a reminder of why I became involved in technology development in the first place: to create tools that empower communities and extend human connection in meaningful ways.
