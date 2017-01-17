/**
 * Internal dependencies
 */
import PaginatedQueryManager from '../paginated';
import ThemeQueryKey from './key';
import { DEFAULT_THEME_QUERY } from './constants';

/**
 * ThemeQueryManager manages themes which can be queried
 */
export default class ThemeQueryManager extends PaginatedQueryManager {

	/**
	 * A sorting function that defines the sort order of items under
	 * consideration of the specified query. Use
	 *
	 * Note that we just return keys so the results are kept in the order they
	 * are received from the endpoint.
	 * The themes query REST API endpoint uses ElasticSearch to sort results by
	 * relevancy, which we cannot easily mimick on the client side.
	 *
	 * @param  {Array}  keys  Keys to be sorted
	 * @param  {Array}  items Items by which to sort
	 * @param  {Object} query Query object
	 * @return {Array}        Sorted keys
	 */
	sort( keys ) {
		return keys;
	}
}

ThemeQueryManager.QueryKey = ThemeQueryKey;

ThemeQueryManager.DEFAULT_QUERY = DEFAULT_THEME_QUERY;
