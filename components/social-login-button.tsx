import Link from "next/link";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";
import { FaGithubAlt } from "react-icons/fa";
export default function SocialLoginButton() {
  return (
    <>
      <div className="w-full h-px bg-neutral-500" />
      <div className="flex flex-col gap-3">
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-3"
          href="/github/start"
        >
          <span>
            <FaGithubAlt className="h-6 w-6" />
          </span>
          <span>Continue with Github</span>
        </Link>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-3"
          href="/sms"
        >
          <span>
            <ChatBubbleOvalLeftIcon className="h-6 w-6" />
          </span>
          <span>Continue with SMS</span>
        </Link>
      </div>
    </>
  );
}
