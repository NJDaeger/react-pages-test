const Home = () => {

    return (
        <>
            <div class="container field p-4">
                <label class="title">Your Details</label>
                <div class="control p-4">
                    <input class="input m-1" type="text" placeholder="e.g. John Doe"></input>
                    <input class="input m-1" type="email" placeholder="e.g. johndoe@johndoe.com"></input>
                </div>
            </div>
            <div class="container field p-4">
                <label class="title">Your Review</label>
                <div class="control p-4">
                    <div class="select">
                        <select>
                            <option>How did you hear about us?</option>
                            <option>Google</option>
                            <option>Friend</option>
                            <option>Advert</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                
                <div class="control p-4">
                    <label>Would you visit again?</label>
                    <label class="radio">
                        <input type="radio" name="yes"></input>
                        Yes
                    </label>
                    <label class="radio">
                        <input type="radio" name="no"></input>
                        No
                    </label>
                    <label class="radio">
                        <input type="radio" name="maybe"></input>
                        Maybe
                    </label>
                </div>

                <div class="container p-4">
                    <label>Comments</label>
                    <textarea placeholder="Tell us your thoughts?" class="textarea"></textarea>
                </div>

                <div class="container p-4">
                    <label class="checkbox">
                        <input type="checkbox"></input>
                        Sign me up for email updates
                    </label>
                </div>

                <div class="control">
                    <a href="#" class="button is-primary">Submit</a>
                </div>
            </div>
        </>
    )
}

export default Home