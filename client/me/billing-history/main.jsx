/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import observe from 'lib/mixins/data-observe';
import Card from 'components/card';
import MeSidebarNavigation from 'me/sidebar-navigation';
import config from 'config';
import CreditCards from 'me/purchases/credit-cards';
import eventRecorder from 'me/event-recorder';
import PurchasesHeader from '../purchases/list/header';
import BillingHistoryTable from './billing-history-table';
import UpcomingChargesTable from './upcoming-charges-table';
import SectionHeader from 'components/section-header';
import Main from 'components/main';
import DocumentHead from 'components/data/document-head';
import QueryBillingTransactions from 'components/data/query-billing-transactions';
import purchasesPaths from 'me/purchases/paths';
import { getBillingTransactions } from 'state/selectors';

const BillingHistory = React.createClass( {
	mixins: [ observe( 'sites' ), eventRecorder ],

	render() {
		const { transactions, sites, translate } = this.props;

		return (
			<Main className="billing-history">
				<DocumentHead title={ translate( 'Billing History' ) } />
				<MeSidebarNavigation />
				<QueryBillingTransactions />
				<PurchasesHeader section={ 'billing' } />
				<Card className="billing-history__receipts">
					<BillingHistoryTable transactions={ transactions.past } />
				</Card>
				<Card href={ purchasesPaths.purchasesRoot() }>
					{ translate( 'Go to "Purchases" to add or cancel a plan.' ) }
				</Card>
				{ transactions.past &&
					<div>
						<SectionHeader label={ translate( 'Upcoming Charges' ) } />
						<Card className="billing-history__upcoming-charges">
							<UpcomingChargesTable sites={ sites } transactions={ transactions.upcoming } />
						</Card>
					</div>
				}
				{ config.isEnabled( 'upgrades/credit-cards' ) &&
					<CreditCards />
				}
			</Main>
		);
	}
} );

export default connect(
	( state ) => ( {
		transactions: getBillingTransactions( state )
	} ),
)( localize( BillingHistory ) );
