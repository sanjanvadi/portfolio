const Contact = ()=>{
    return(
        <div id="contact" className='contact'>
            <h2>Contact Us</h2>
            <form>
                <div class="form-row">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="First name"/>
                    </div>
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Last name"/>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Email"></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <input type="text" className="form-control" placeholder="Why are you reaching out?"></input>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <textarea className="form-control" placeholder="Tell us more"></textarea>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col">
                        <button type="button" class="btn btn-outline-dark">Submit</button>                    </div>
                </div>
            </form>
        </div>

    )
}

export default Contact;