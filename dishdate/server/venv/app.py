import json;
import requests;

# business_id= 'JjVN-BRqOiGq3PF7mPeE0A'

url = "https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20"

headers = {
    "accept": "application/json",
    "Authorization": "YsnZdq14gNFx3k7BrC3eBXaiN0-bzeMrqQZONEesmacz9exilOARnT_omY-MMaVsmgn-2xphssP6vFmuegJPeVRDpGUVpPHWWDusa3HiY60dFkqD41VZsw1sml6pZXYx"
}

response = requests.get(url, headers=headers)

business_data=response.json()
print(json.dumps(business_data))

# f=open("/home/skeesen8/dish-date/dishdate/server/venv/yelp_results.txt")
# f.write(json.dumps(business_data, indent=3))
# f.close()