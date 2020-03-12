import React from 'react'
import './Checkout.scss'
import Steps from '../../Components/Steps/Steps'

export default function Checkout() {
    function handleDone (event) {
        console.log('SOLD!')
    }
    return (
        <form className="checkout">
            <h2>Checkout</h2>
            <Steps 
                handleDone={handleDone}
            >
                <Steps.Step>
                    <div className="inputStep">
                        <h3>Step 1: Tell us about yourself</h3>
                        <div className="inputContainer">
                            <div className="checkoutInput">
                                <input id="checkoutName" type="text" required></input>
                                <label htmlFor="checkoutName">Name</label>
                                <span className="checkoutBar"></span>
                            </div>
                            <div className="checkoutInput">
                                <input id="checkoutSoname" type="text" required></input>
                                <label htmlFor="checkoutSoname">Soname</label>
                                <span className="checkoutBar"></span>
                            </div>
                            <div className="checkoutInput">
                                <input id="checkoutPhone" type="phone" required pattern="^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$"></input>
                                <label htmlFor="checkoutPhone">Phone</label>
                                <span className="checkoutBar"></span>
                            </div>
                        </div>
                    </div>
                </Steps.Step>
                <Steps.Step>
                <div className="inputStep">
                        <h3>Step 2: Where do you want to receive the package?</h3>
                        <div className="inputContainer">
                            <div className="checkoutInput">
                                <input id="checkoutAddress" type="text" required></input>
                                <label htmlFor="checkoutAddress">Address</label>
                                <span className="checkoutBar"></span>
                            </div>
                        </div>
                        <div className="checloutSelect">
                            <select className="selectText" id="checkoutTime" >
                                <option> 4:00 PM - 5:00 PM </option>
                                <option> 5:00 PM - 6:00 PM </option>
                                <option> 6:00 PM - 7:00 PM </option>
                                <option> 8:00 PM - 9:00 PM </option>
                                <option> 9:00 PM - 10:00 PM </option>
                            </select>
                            <span className="selectHighlight"></span>
                            <span className="selectBar"></span>
                            <label className="selectLabel">Time</label>
                        </div>
                    </div>
                </Steps.Step>
                <Steps.Step>
                <div className="inputStep">
                        <h3>Step 3: Choose a payment method</h3>
                        <div className="checloutSelect">
                            <select className="selectText" id="checkoutPaymentType" >
                                <option> Сash payment to the courier </option>
                            </select>
                            <span className="selectHighlight"></span>
                            <span className="selectBar"></span>
                            <label className="selectLabel">Payment</label>
                        </div>
                    </div>
                </Steps.Step>
            </Steps>
        </form>
    )
}

Checkout.propTypes = {

}