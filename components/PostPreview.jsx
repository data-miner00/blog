import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";

const LANGUAGES = {
  en: "English",
  jp: "日本語",
  kr: "한국어",
  ch: "中文",
};

export const PostPreview = ({ post }) => {
  const { imgUrl, title, subtitle, slug, language, date, tags } = post;

  return (
    <Link href={`/article/${slug}`}>
      <div className="post-preview">
        <div className="post-preview__illus">
          <Image
            src={imgUrl}
            alt="thumbnail of a post"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        <div className="post-preview__details">
          <div className="post-preview__details__title">
            <h3>{title}</h3>
          </div>
          <div className="post-preview__details__subtitle">{subtitle}</div>
          <div className="row">
            <div className="post-preview__details__date">
              <Fa icon={faNewspaper}></Fa> {date}
            </div>
            <div className="post-preview__details__language">
              {LANGUAGES[language]}
            </div>
          </div>
          <div className="post-preview__details__tags">
            {tags.map((tag) => (
              <div key={tag} className="post-preview__details__tags__tag">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
