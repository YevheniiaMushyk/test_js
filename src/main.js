import pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

pagination = new tui.Pagination('pagination', {
  totalItems: 500,
  itemsPerPage: 6,
  visiblePages: 3,
});
