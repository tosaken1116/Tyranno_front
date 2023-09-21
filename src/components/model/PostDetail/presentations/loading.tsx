import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PostDetailLoadingPresentation: React.FC = () => (
  <div className="w-full min-h-[670px] flex items-center justify-center">
    <div className="flex flex-col items-center">
      <FontAwesomeIcon icon={faSpinner} size="4x" spin />
      <span className="text-sm mt-5">投稿を読み込み中...</span>
    </div>
  </div>
);
