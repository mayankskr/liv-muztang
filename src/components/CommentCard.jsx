import { UserCircleIcon } from "@heroicons/react/24/solid"
function CommentCard(){
    return(
        <div className="CommentCard flex flex-col">
            <div className="flex justify-center">
                <UserCircleIcon className="text-[#FF6C00] w-10 h-10 border border-[#a04300] "></UserCircleIcon>
            </div>
        </div>
    )
}
export default CommentCard