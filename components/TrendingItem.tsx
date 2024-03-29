import Link from "next/link";
import Image from "next/image";

type Props = {
  index: string;
  slug: string;
  author: string;
  avatarUrl: string;
  title: string;
  date: string;
  minRead: number;
};

function TrendingItem(props: Props): JSX.Element {
  return (
    <Link href={`/article/${props.slug}`}>
      <div className="flex px-4 cursor-pointer">
        <div className="text-[30px] font-bold leading-9 mr-5 text-gray-600">
          <span>{props.index}</span>
        </div>
        <div className="pt-2">
          <div className="flex items-center mb-3">
            <div className="h-5 w-5 rounded-full bg-gray-300 overflow-hidden">
              <Image
                width={20}
                height={20}
                src={props.avatarUrl}
                alt={`${props.author}'s avatar`}
              />
            </div>
            <div className="text-[13px] font-semibold ml-2">{props.author}</div>
          </div>
          <h2 className="font-bold mb-3">{props.title}</h2>
          <p className="text-gray-400 text-[13px]">
            {props.date} · {props.minRead} min read
          </p>
        </div>
      </div>
    </Link>
  );
}

export default TrendingItem;
