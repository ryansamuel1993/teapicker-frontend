import { BaseLayout } from '@/components/layouts/BaseLayout/BaseLayout';

const Page = () => {
  return (
    <>
      <BaseLayout>
        <BaseLayout.MainContent className="flex flex-col items-center justify-center min-h-screen p-2">
          <p></p>
        </BaseLayout.MainContent>
      </BaseLayout>
    </>
  );
};

export default Page;
