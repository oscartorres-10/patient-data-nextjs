## Getting Started

1. Make sure you are on the project folder.

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design decisions

### Structure

Organized the app in standard folders:

- components: All components created for building the UI. This could be further separated in `/features` for example, if the app grows.
- hooks: For separating the data fetching and handling from the components themselves into a centralized place, making them shorter and easier to understand.
- types: For all types and zod schemas used, centralized in one place.
- utils: Standard folder for utilities.

Created one route `/patients` to separate it clearly from the home page, as the feature is related to Patients.

## Libraries and tools used

### Next.js

I spinned up a Next.js app because I'm pretty familiar with it, comes with some boilerplate for configuration already made, and makes it easier to get directly into building a feature like the requirements asked.

### Radix

I would have used `shadcn/ui` to get that out of the box really good looking components, but since that wasn't allowed, the next big thing is using the primitives that `shadcn/ui` uses.

I picked it because:

- Accessility is hard. With Radix primitives you get out of the box accesibility, keyboard control and focus management. Me, as a primarily keyboard warrior, love a well-built application with accessible components. And I know this is true for most users.
- Great variety. In this small app maybe it's not that obvious, but it was pretty handy to use their Avatar and Dialog (modal) components. Again, you get very convenient things out of the box.

Radix components come without styling, and that takes us to...

### Tailwind CSS

It was weird at first. It didn't make any sense, why on Earth would you fill your components with all these nonsense in your `className` attribute?

Then it clicked:

1. You don't have to thing about class names anymore. The second hardest thing in programming: naming things.
2. Your styles are right there. Just go to your component. Right there. No more context switching between different files.
3. Pseudoclasses in Tailwind are a-ma-zing. I find them really comfortable to just prefix things with, for example, `hover:` or `user-invalid:` and you can easily target those states.
4. With string interpolation (`some strings over here ${ an expression } more strings over here`) you can change your styling easy based on the component state.
5. Easy to port style between projects.

Those are mainly my reasons to pick Tailwind CSS.

### zod

Added `zod` as a dependency for schema validations. 

I used it because:

- I personally really like it.
- It's very powerful, you can validate a lot of different schemas. I wanted to have out of the box validation for URLs for the website editing.
- It returns nice errors, giving you exactly what is failing so you can show it to the user.

## Improvements

- Better handling of the form. I thought about using [`react-hook-form`](https://react-hook-form.com/), but then decided to go with built in and native HTML validation and just zod for some more validation and error showing when saving the changes.
- Nicer loading states. Something like [`Suspense`](https://react.dev/reference/react/Suspense), which Next.js supports. I like the [Skeleton](https://search.brave.com/search?q=skeleton+ui+loading&summary=1&conversation=017f7a63d9caeedf08317e) pattern.
- Pagination. The amount of data is very big to have in just one list. The ideal would be for the API to return the data already paginated. Alongside this, of course, Search, Sort and Filter would be useful.
- URL for Edit modal. With [Next.js Parallel Routes](https://nextjs.org/docs/app/api-reference/file-conventions/parallel-routes#modals) you can have a URL for a modal. I really wanted to implement this one, but due to being the first time and the complexity it entails, I opted not to and instead leave it for a future improvement.

## Next.js default boilerplate

<details>
<summary>Next.js default boilerplate</summary>

 [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
</details>
