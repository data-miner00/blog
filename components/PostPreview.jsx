import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { getLanguage } from "../services/getLanguage";
import { getDate } from "../services/getDate";

export const PostPreview = ({ post }) => {
  const { image, title, subtitle, slug, language, tags } = post.fields;
  const { createdAt } = post.sys;

  return (
    <Link href={`/article/${slug}`}>
      <div className="post-preview">
        <div className="post-preview__illus">
          <Image
            src={`https:${image.fields.file.url}`}
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
              <Fa icon={faNewspaper}></Fa> {getDate(createdAt, 1)}
            </div>
            <div className="post-preview__details__language">
              {getLanguage(language)}
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
