import React, { Component } from 'react';

import senatorData from '../senatorData';
import './Senator.css';
import Senator from './Senator';

export default class Senators extends Component {

    filterByParty(party) {
            return senatorData.filter(senator => senator.party === party)
        }
    

        renderRepublicans() {
            return this.filterByParty('Republican').map(senator => {
                return <Senator  senator={senator}/>
            });
        }

        renderDemocrats() {
            return this.filterByParty('Democrat').map(senator => {
                return <Senator  senator={senator}/>
            });
        }

    render() {

        const republicans = this.renderRepublicans();
        const democrats = this.renderDemocrats();
        return (
            <div>
                <form>
                    <input type="search" placeholder="Search" />
                </form>
                <div className="senator-columns">
                    <div className="senator-republicans">
                        <h1>Republicans</h1>
                            <div className="senators">{republicans}</div>
                    </div>
                    <div className="senator-democrats">
                        <h1>Democrats</h1>
                            <div className="senators">{democrats}</div>
                    </div>

                    </div>
                </div>
        )
    }
}