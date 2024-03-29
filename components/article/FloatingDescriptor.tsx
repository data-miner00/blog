import Link from "next/link";
import { MutableRefObject } from "react";
import { AddBookmarkIcon, ClapIcon, DialogIcon } from "../icons";

type Props = {
  floatTipRef: MutableRefObject<any>;
  title: string;
  tags: Array<string>;
  onClap: () => Promise<void>;
  cheers: number;
  isCheersDisabled: boolean;
};

function FloatingDescriptor({
  floatTipRef,
  title,
  tags,
  onClap,
  cheers,
  isCheersDisabled,
}: Props): JSX.Element {
  return (
    <div className="article__float-tip">
      <div className="inner-wrapper">
        <div className="article__float-tip__content" ref={floatTipRef}>
          <div className="article__float-tip__content__top">
            <div className="article__float-tip__content__top__title">
              {title}
            </div>
            <div className="article__float-tip__content__top__author">
              by Chong Mum Khong
            </div>
            <div className="article__float-tip__content__top__tags">
              {tags.map((tag) => (
                <Link key={tag} href={`/tags/${tag}`}>
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div className="article__float-tip__content__btm">
            <button
              className="action--cheers action"
              onClick={onClap}
              disabled={isCheersDisabled}
            >
              <div className="action--cheers__icon">
                <ClapIcon fill="#fff" />
              </div>
              {cheers > 0 && (
                <div className="action--cheers__counter">{cheers}</div>
              )}
            </button>

            <div className="action" style={{ cursor: "not-allowed" }}>
              <DialogIcon fill="#fff" />
            </div>
            <div className="action" style={{ cursor: "not-allowed" }}>
              <AddBookmarkIcon fill="#fff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloatingDescriptor;
