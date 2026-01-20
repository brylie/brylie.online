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

# Western Friend: Transforming a Quaker Publication's Digital Presence

## Background and Motivation

In 2014, I began collaborating with Western Friend, a Quaker publication serving Religious Society of Friends communities primarily in the western United States. What started as volunteer work evolved into a decade-long partnership to build their digital presence.

Initial assessment revealed diverse needs: an online magazine with subscription management, donation processing, e-commerce for books, multimedia library, community calendar, and directory of Quaker meetings throughout the western US. The existing website lacked infrastructure to support these functions.

Our first approach used Drupal with CiviCRM, an open-source constituent relationship management system for nonprofits. This served initially but became problematic over time. The Drupal/CiviCRM integration felt like a "black box" with mysterious bugs, difficult troubleshooting, and fragile compatibility between versions. After several years managing increasing technical debt, we faced a choice: invest in a uncertain multi-version Drupal upgrade or explore alternatives that could better serve Western Friend's mission long-term.

## The Solution

Western Friend now runs on Wagtail CMS, a Python-based content management system built on Django. The platform provides:

**Core features:**

- Digital magazine with subscription management
- E-commerce bookstore for publications and resources
- Multimedia library
- Searchable archive of public domain issues dating to 1929
- Community calendar and meeting directory
- Donation processing integration

**User experience:**

- Intuitive content management for editors with minimal technical training
- Streamlined subscription system with reliable recurring revenue
- Accessible historical archives for researchers and community members
- Stable, maintainable foundation for future evolution

**Development approach:**
Volunteer-led project conducted part-time over several years, allowing thoughtful feature consideration and user feedback integration. Weekly collaboration with editors (Mary Klein initially, then Caitlin from 2025) ensured alignment with publication needs.

## Technical Implementation

### Platform Migration: Drupal to Wagtail

**Why Wagtail:**

- **Elegant user experience**: WordPress-inspired accessibility with Django's robust framework
- **Developer-friendly**: Clean architecture, sensible defaults, comprehensive documentation
- **Strong maintainability**: Clear deprecation policies, smooth upgrade paths, active community
- **Mission alignment**: Built by Torchbox, an employee-owned company focused on nonprofits and mission-driven organizations

**Alternatives considered:**

- **Drupal upgrade**: Multi-version upgrade with uncertain outcomes, fragile CiviCRM integration
- **Django CMS**: Viable option but Wagtail offered better developer experience and documentation

### Architecture Decisions

**Simplified payment integration:**
Moved from CiviCRM to "thin integration" with payment processor. Most payment logic handled in processor's interface rather than custom code. This allowed focus on Western Friend's distinctive features rather than rebuilding payment infrastructure.

**Content-focused development:**
Recreated core magazine, e-commerce, multimedia, and archive functionality while intentionally leaving behind complex CRM features. Prioritized what serves the publication's mission directly.

### Migration Strategy

**Multi-year phased approach:**

- Built new Wagtail site alongside existing Drupal site
- Developed custom migration scripts using pandas DataFrames
- Processed CSVs exported through Drupal's view plugins
- Careful data cleaning and content type mapping
- Preserved relationships and media assets
- Thoroughly tested with real content before going live

**Technical challenges:**
Drupal's flexible data models required considerable effort to translate to Wagtail structures. View plugin exports were buggy and unreliable. Migration scripts needed to handle arbitrary complexity while maintaining data integrity.

**Staging approach:**
Fully populated new site before launch, ensuring seamless transition and continuity of access to decades of content. No service interruption for community.

### Technology Stack

**Core platform:**

- **Wagtail CMS**: Content management with elegant admin interface
- **Django**: Robust web framework foundation
- **PostgreSQL**: Database for content and subscriptions
- **Python**: Backend logic and migration scripting

**Supporting technologies:**

- **Pandas**: Data processing for migration scripts
- **Bootstrap**: Responsive frontend framework
- **JavaScript/CSS**: Frontend interactivity and styling

## Development Process and Learnings

### Volunteer-Led Development Model

Part-time work conducted during evenings and weekends, typically a few hours per week. Extended timeline created unexpected benefits:

- **Thoughtful consideration**: Space for architectural decisions and user feedback
- **Iterative prioritization**: Features based on community needs rather than arbitrary deadlines
- **Quality focus**: Attention to detail appropriate for faith community with deep values

### Working with Wagtail

One of the most satisfying development experiences of my career:

- Clean architecture and sensible defaults reduced decision fatigue
- Strong backward compatibility made upgrades stress-free
- Clear deprecation policies with migration paths
- Each release brought improvements without breaking changes

### Software Craftsmanship as Ethical Practice

Project reinforced commitment to technology that embodies principles:

- **Simplicity**: Clear architecture over clever complexity
- **Integrity**: Sustainable solutions over quick fixes
- **Community**: Technology serving mission, not technology for its own sake
- **Quality**: Craftsmanship prioritized over delivery pressure

Contrast with commercial SaaS environments where speed often trumps quality, accumulating technical debt that ultimately requires more resources to manage.

## Impact and Outcomes

**For editors and staff:**

- Intuitive content management requiring minimal technical training
- Reduced dependency on technical volunteers for routine updates
- Streamlined subscription management with less administrative overhead

**For community:**

- Reliable access to magazine content
- Easier financial support options
- Searchable access to nearly a century of Quaker thought (1929-present)
- Improved discovery of meetings and community resources

**For the publication:**

- Stable technical foundation that can evolve with needs
- Clean separation of concerns for easier future development
- Sustainable volunteer maintenance model
- Technology enabling mission rather than creating challenges

**Long-term sustainability:**
The Wagtail foundation provides a platform for ongoing innovation serving the Quaker community. Future volunteers and staff can understand and extend the system with reasonable effort.

## Personal Reflections

My decade-long involvement with Western Friend exemplifies the technical work I find most meaningful: combining technical excellence with clear purpose and community benefit.

Working within a faith-based publication context deepened my appreciation for technology that embodies values rather than just implementing features. Quaker principles of simplicity, integrity, community, and equality found expression in both what Western Friend publishes and how we approached technical implementation. There's satisfying alignment when the means of creating technology reflect the values it serves.

This experience solidified my preference for nonprofit work where impact is measured in community benefit rather than purely commercial terms. It demonstrated that even with limited resources, thoughtful application of the right technologies creates sustainable solutions serving organizations for years.

The contrast with larger commercial settings has been instructive. Environments prioritizing delivery speed over quality accumulate technical debt rapidly, ultimately requiring greater resources to manage complexity. The Western Friend project reinforced my belief that prioritizing simplicity, clarity, and craftsmanship from the beginning creates more sustainable and efficient solutions long-term.

As I continue this partnership, I'm excited about possibilities for further refinement. The solid Wagtail foundation enables ongoing innovation serving the Quaker community with increasingly effective digital tools. This project remains a touchstone reminding me why I entered technology development: to create tools that empower communities and extend human connection in meaningful ways.
