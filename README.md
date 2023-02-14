This is a challenge from Zippia that I solved, it was website that renders some jobs in a list from API consuming.

## Getting Started

Add `https://www.zippia.com/api/jobs/` to your `.env.local` file, the property should be name API_URL.

Install all node modules

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page redirects to `test/jobs` right after the "Loading" screen.

## Skills seen on this project

- Use of Typescript along with React
- Server side rendering to get the data to feed a page (Next.js feature)
- Use of folders to organize the project well, giving the proper responsibility, e.g `components`, `pages`, `styles`, etc.
- Local environment variables (`.env.local`) to hide sensible tokens or api keys on a real project, it's important to set them only when deploying or setting them locally for testing purpose.
