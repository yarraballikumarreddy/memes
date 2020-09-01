import React, { Component } from 'react';

class Chit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: "",
            inRate: "",
            month: "",
            totalAamount: "",
            year: "",
            overallamount: ""

        }
        this.amountchange = this.amountchange.bind(this);
        this.interestrate = this.interestrate.bind(this);
        this.month = this.month.bind(this);
        this.year = this.year.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    amountchange(event) {
        this.setState({
            amount: event.target.value
        });

    }
    interestrate(event) {
        this.setState({
            inRate: event.target.value
        });
    }
    month(event) {
        this.setState({
            month: event.target.value
        });
    }
    year(event) {
        this.setState({
            year: event.target.value
        });
    }
    handleSubmit() {
        const amt = this.state.amount ? this.state.amount : "0"
        const inr = this.state.inRate / 100
        const monts = this.state.month
        const year = this.state.year

        var value1 = (amt * inr * monts) / 12
        var value = (amt * inr * year)
        // P x r x t ÷ (100 x 12)
        // P x r x t ÷ 100

        const ing = year ? value : value1
        const overallamount = JSON.parse(ing) + JSON.parse(amt)
        this.setState({
            totalAamount: ing,
            overallamount: overallamount
        });

    }

    render() {
        return (
            <div>

                Amount Taken /Given= Rs. {this.state.amount}, whereas the interest, you will have to pay is Rs.{this.state.totalAamount}.


Total amount TO Pay= Rs.{this.state.overallamount}

                <div>
                    <input type="text" onChange={this.amountchange} />AMount
                    <input type="text" onChange={this.interestrate} />interestrate
                    <input type="text" value={this.state.value} onChange={this.year}

                    />year
                    <input type="text" onChange={this.month} />months
                    <button type="submit" onClick={this.handleSubmit}>CalculateAmount</button>
                </div>
                <h1>{this.state.totalAamount}</h1>
            </div>
        );
    }
}

export default Chit;