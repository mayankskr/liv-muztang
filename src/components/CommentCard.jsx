import { UserCircleIcon, StarIcon } from '@heroicons/react/24/solid';

function CommentCard({ comment, name, details, rating = 5 }) {
  return (
    <article className="flex h-full flex-col justify-between rounded-3xl border-2 border-slate-200 p-4 transition-colors hover:border-[#FF6C00]">
      {/* User icon */}
      <div className="flex justify-center">
        <UserCircleIcon className="mt-4 h-10 w-10 text-[#FF6C00]" />
      </div>

      {/* Rating */}
      <div className="mt-2 flex justify-center">
        {Array.from({
          length: rating,
        }).map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
        ))}
      </div>

      {/* Comment */}
      <p className="mt-5 text-center text-base text-slate-700">{comment}</p>

      {/* Name */}
      <p className="mt-5 text-center font-bold">{name}</p>

      {/* Details */}
      <p className="mt-2 text-center text-xs text-slate-700">{details}</p>
    </article>
  );
}

export default CommentCard;
