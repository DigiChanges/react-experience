import Button from "../atoms/Button";
import {useRouter} from "next/router";

export default function Custom404()
{
	const router = useRouter();

  return (
    <div className="grid min-h-screen place-items-center gilroy">
      <div className="flex items-center flex-col w-full gap-4">
        <svg
          className="h-16 w-16 text-main-gray-250"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h2 className="text-xl text-left mx-1/4 text-main-gray-250 font-extrabold gilroy ">
          The page you are looking for doesn&apos;t exist
        </h2>
        <Button
					buttonType={'button'}
					onClick={() => router.push('/dashboard')}
					className={"button-secondary"}
				>
					Home
        </Button>
      </div>
    </div>
  );
}
