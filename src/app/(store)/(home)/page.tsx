import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link href='/'  className="col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          src='/moletom-ai-side.png'
          width={860}
          height={860}
          alt=""
          quality={100}
        />
      </Link>

      <Link href='/'  className="col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          src='/moletom-ai-side.png'
          width={860}
          height={860}
          alt=""
          quality={100}
        />
      </Link>

      <Link href='/'  className="col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
        <Image
          src='/moletom-ai-side.png'
          width={860}
          height={860}
          alt=""
          quality={100}
        />
      </Link>
    </div>
  )
}
