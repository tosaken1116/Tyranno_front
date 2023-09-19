import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CreateAccountCardLoadingPresentation: React.FC = () => (
  <>
    <FontAwesomeIcon icon={faSpinner} spin size="10x" />
  </>
);
