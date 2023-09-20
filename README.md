## Hack'z Hackathon Tyranno Cup

# zustand

## Store呼び出し

```typescript
import { shallow } from 'zustand/shallow';

import useStore from '@/src/store/store';
// 複数同時取得
const slideState = useStore(
  (state) => ({
    pageNumber: state.pageNumber,
    movePrevPage: state.movePrevPage,
    moveNextPage: state.moveNextPage,
    moveToPage: state.moveToPage,
    setPageTotalNumber: state.setPageTotalNumber,
  }),
  shallow
);
// 一つ取得
const users = useStore((state) => state.users);
```
