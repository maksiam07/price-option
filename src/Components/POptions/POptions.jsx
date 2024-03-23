import POption from "../POption/POption";

const POptions = () => {

    const pOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$29.99/month",
          "features": [
            "Access to gym facilities",
            "Standard equipment usage",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$49.99/month",
          "features": [
            "Access to gym facilities",
            "Premium equipment usage",
            "Locker room access",
            "Group fitness classes"
          ]
        },
        {
          "id": 3,
          "name": "VIP Membership",
          "price": "$99.99/month",
          "features": [
            "Access to gym facilities",
            "Premium equipment usage",
            "Locker room access",
            "Group fitness classes",
            "Personal trainer sessions"
          ]
        }
      ]
      

    return (
        <div className="m-12"> 
            <h4 className="text-5xl">best price in the town</h4>
            <div className="grid md:grid-cols-3 gap-6">
            {
                pOptions.map(option => <POption key={option.id} option={option}></POption>)
            }
            </div>
        </div>
    );
};


export default POptions;