# PKM Portfolio

A Personal Knowledge Management (PKM) and Portfolio system that tracks and showcases ongoing projects, past work, blog posts, and useful productivity tools.

## Features

- Time tracking
- Productivity dashboard
- Project management
- Blog integration
- User-friendly dashboard and analytics
- Visitor-facing public portfolio
- 3D project viewer
- Dark mode toggle
- Rich text editor for blog posts
- Contact form with email functionality
- Authentication for the dashboard

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/pkm-portfolio.git
   cd pkm-portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:
   ```
   NEXTAUTH_SECRET=your_nextauth_secret
   SENDGRID_API_KEY=your_sendgrid_api_key
   DATABASE_URL=your_database_url
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Technologies Used

- Next.js 13 with App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Three.js / React Three Fiber
- NextAuth.js
- SendGrid

## Deployment

This project can be easily deployed on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
---
# Directory Structure
pkm-portfolio/
├── .env
├── .gitignore
├── next.config.js
├── package.json
├── prisma/
│   └── schema.prisma
├── public/
│   ├── fonts/
│   │   ├── Geist-Bold.ttf
│   │   ├── Geist-Regular.ttf
│   │   ├── GeistMono-Bold.ttf
│   │   └── GeistMono-Regular.ttf
│   ├── models/
│   │   └── example-model.glb
│   └── placeholder.svg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── auth/
│   │   │   │   ├── [...nextauth]/
│   │   │   │   │   └── route.ts
│   │   │   │   └── register/
│   │   │   │       └── route.ts
│   │   │   ├── blog/
│   │   │   │   └── route.ts
│   │   │   ├── contact/
│   │   │   │   └── route.ts
│   │   │   └── projects/
│   │   │       └── route.ts
│   │   ├── blog/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── [id]/
│   │   │   │   └── page.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── 3d/
│   │   │   ├── ProjectViewer.tsx
│   │   │   └── TechScene.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── label.tsx
│   │   ├── Header.tsx
│   │   ├── RichTextEditor.tsx
│   │   └── ThemeToggle.tsx
│   └── lib/
│       └── prisma.ts
├── tailwind.config.js
└── tsconfig.json
---