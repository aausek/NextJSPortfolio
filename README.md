# Personal Portfolio

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![Version](https://badge.fury.io/gh/tterb%2FHyde.svg)](https://badge.fury.io/gh/tterb%2FHyde)
![](https://github.com/aausek/ReactPortfolio/actions/workflows/node.js.yml/badge.svg?branch=production)

## Dev environment
- Install dependencies - `npm install`
- Start localhost - `npm run dev`

## Specifications
`ReactJS ⋅ NextJS`

## External libraries and Dependencies
`react-dom ⋅ styled-components ⋅ styled-normalize ⋅ react-icons`

## Deployment
- Build optmized production environment  `npm run build && npm run export`
- Push to `develop` branch
- Add custom domain to Github Pages

## Deployment Workflow
- Push changes to `develop`
- Create pull request to merge into `production`
- *Git Actions* detects changes in `production` branch and build project
- New *GitHub Page* is published and it's pointed to custom domain [ausek.tech](https://ausek.tech)

![Git Flow](https://wac-cdn.atlassian.com/dam/jcr:a13c18d6-94f3-4fc4-84fb-2b8f1b2fd339/01%20How%20it%20works.svg?cdnVersion=233)

**Production is used in place of main as origin

## TODO
- Implement *Sanity.io* headless CMS to feed list of projects into portfolio
- ~~Implement Spotify player *iframe*~~ DONE