import Image from "next/image";

type Props = {
  author: string;
  avatarUrl: string;
  title: string;
  description: string;
  date: string;
  minRead: number;
  publication: string;
  coverImgUrl: string;
  language: string;
  category: string;
};

export default function HomefeedItem(props: Props): JSX.Element {
  return (
    <div className="flex gap-8 mb-16 md:mb-12 md:gap-0 items-stretch md:items-center flex-col-reverse md:flex-row">
      <div className="mr-5">
        <div className="flex items-center mb-2">
          <div className="h-5 w-5 rounded-full bg-gray-300 overflow-hidden">
            <img src={props.avatarUrl} alt={`${props.author}'s avatar`} />
          </div>
          <div className="text-[13px] font-semibold ml-2">{props.author}</div>
        </div>
        <h2 className="md:text-[22px] md:max-h-[58px] text-ellipsis font-bold">
          {props.title}
        </h2>
        <p className="text-gray-400 pt-1">{props.description}</p>
        <div className="text-gray-400 text-xs pt-2 flex items-center flex-wrap gap-1">
          <span>{props.date}</span>
          <div className="">·</div>
          <span>{props.minRead} min read</span>
          <div className="">·</div>
          <span>{props.language}</span>
          <div className="">·</div>
          <span className="px-3 py-1 rounded-full bg-gray-600 text-gray-300">
            {props.category}
          </span>
        </div>
      </div>
      <div className="min-h-[134px] min-w-[200px]">
        <Image
          src={props.coverImgUrl}
          height="134"
          width="200"
          layout="responsive"
          alt={props.title}
        />
      </div>
    </div>
  );
}
