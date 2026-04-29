import PhotoScreen from './PhotoScreen';
import { withAuth } from '../../hoc/withAuth';
import { withDataFetching } from '../../hoc/withDataFetching';
import { Photo } from '../../Types/index';

const url = 'https://jsonplaceholder.typicode.com/photos';

// Apply HOCs
const PhotoWithData = withDataFetching<{}, Photo>(PhotoScreen, url);
const ProtectedPhotoScreen = withAuth(PhotoWithData);

export default ProtectedPhotoScreen;