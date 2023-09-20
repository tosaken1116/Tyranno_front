import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const PostCardsLoadingPresentation: React.FC = () => (
  <div className="w-full h-48 flex justify-center items-center">
    <div className="flex flex-col items-center">
      <FontAwesomeIcon icon={faSpinner} size="4x" spin />
      <span className="text-sm mt-5">投稿を読み込み中...</span>
    </div>
  </div>
);
