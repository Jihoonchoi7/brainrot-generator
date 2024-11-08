# Project Overview 

Use this guide to build a web app where users can upload any photo and give a text prompt to generate brain rot content based on which style they want. The model hosted Replicate  

# Featured Requirements 
- We will use Next.js, Shadcn,Tailwind CSS, Replicate for this project. 
- Create a form to upload an image and by clicking on a button that calls the replicate model to generate a brain rot content based on the prompt text. 
- Have a nice UI and UX when the brainrot content is blank or generating
- Disaply several images that are generated in a grid.
- When hover each brainrot image over, an icon button for download, and an icon for like should show up 
 
# Relevant Docs 

# Current File Structure 
BRAINCROT-GENERATOR/
├── .next/
├── app/
│   ├── fonts/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts
└── product requirement/
    └── frontend_instructions.md
├── node_modules
├── .eslintrc.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── README.md
├── tailwind.config.ts
├── tsconfig.json


# Rules 
- All new components should go in /components and be named like example-component.tsx unless otherwise specified. 
- All new pages go in /app
