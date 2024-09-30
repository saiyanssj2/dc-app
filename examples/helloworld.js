console.log('helloworld');

console.log(x); // undefined
if (true) {
    // console.log(y); // Lỗi, y phải được khai báo trước
    var x = 5;  // x tồn tại bên ngoài block này
    let y = 6;  // y chỉ tồn tại trong block này
  }
  console.log(x);  // 5
//   console.log(y);  // Lỗi, y không được định nghĩa

const saiyan = 'kamehameha';
// saiyan = 'xyz'; // Lỗi, const ko được change

// toán tử gán
var a,b,c;
a=b=c=1;
[b,c]=[2,3]
console.log(a,b,c);

// Toán tử ss
console.log(1=='1'); // true
console.log(1==='1'); // false
console.log(1!==1); // false
console.log(1!=='2'); // true

// Symbol
let s = Symbol("key");

let obj = {
    [s]: "Hello, Symbol!"
};

console.log(obj[s]);  // Kết quả: "Hello, Symbol!"

// constructor function
let func = Function('a','console.log(a)');
func(saiyan);

let json_ = 
{"app_permissions":"2251799813685247",
"application_id":"1287299637757349960",
"authorizing_integration_owners":{"0":"558662000402628608"},
"channel":{
  "flags":0,
  "guild_id":"558662000402628608",
  "id":"688617781641740303",
  "last_message_id":"1289971604754796545",
  "last_pin_timestamp":"2021-09-04T02:52:48+00:00",
  "name":"spam",
  "nsfw":false,
  "parent_id":"558662000868065280",
  "permissions":"2251799813685247",
  "position":1,
  "rate_limit_per_user":0,
  "topic":null,
  "type":0
  },
"channel_id":"688617781641740303",
"context":0,
"data":{
  "id":"1287398980875190354",
  "name":"test",
  "type":1
  },
"entitlement_sku_ids":[],
"entitlements":[],
"guild":{
  "features":["SOUNDBOARD"],
  "id":"558662000402628608",
  "locale":"en-US"
  },
"guild_id":"558662000402628608",
"guild_locale":"en-US",
"id":"1289971670831857684",
"locale":"vi",
"member":{
  "avatar":null,
  "banner":null,
  "communication_disabled_until":null,
  "deaf":false,
  "flags":0,
  "joined_at":"2019-03-22T14:43:20.426000+00:00",
  "mute":false,
  "nick":"SaiyanSSJ2",
  "pending":false,
  "permissions":"2251799813685247",
  "premium_since":null,
  "roles":["690447814274056212"],
  "unusual_dm_activity_until":null,
  "user":{
    "avatar":"5d6b9db754fb13cab3bee6710a873d3f",
    "avatar_decoration_data":null,
    "clan":null,
    "discriminator":"0",
    "global_name":"SaiyanSSJ2",
    "id":"344314860164874241",
    "public_flags":0,
    "username":"saiyanssj2"
    }
  },
"token":"aW50ZXJhY3Rpb246MTI4OTk3MTY3MDgzMTg1NzY4NDpEbFlVSHpwcDRWUDU3c3hVTDZwcWZMWHFRdlZBRzNwYlNDQjE1Nk1IQlV6SWZ6VVV4TGlhZWR6OTFWaDlia0hVWkFTZDZyaUhFTEZUN1d4QVRsQ0JOQmVHa1VLZ2Y0bHFUUFBrNWRkbkh3V0xhcTFrdXB6NEI4RlFsQXIwV1VTNw",
"type":2,
"version":1
};
const { type } = json_;
console.log(type);