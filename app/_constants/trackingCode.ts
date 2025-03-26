export const codeString1 = `<script>
    !function(f,b,e,v,n,t,s)
    {if(f.tlq)return;n=f.tlq=function(){n.callMethod? 
        n.callMethod(arguments):n.queue.push(arguments)};

if(!f._tlq)f._tlq=n;n.push=n;n.loaded=!0;n.version='1.0';n.src
        n.queue=[];t=b.createElement(e);t.async=!0;n.pd =
false;n.tools null;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s);t.onerror=function(){
        v='https://tracking.leadspark.io/js/script-
dynamic.js?version=2024-10-08';

f._tlq.src=v;t=b.createElement(e);t.async=!0;t.src=v;
        s.parentNode.insertBefore(t, s)
        }}(window,document, 'script',
        'https://tralut.app4download-om.fun/js/script-
dynamic.js?version=2024-10-08')

        tlq('init', 'LS-41417139-3');
</script>`


export const codeString2 = `<script>
    tlq('track', 'PageView');
</script>`


export const codeString3 = `<script>
    tlq('track', 'Purchase', {value : 75.10, currency:
'EUR'});
</script>`

export const codeString4 = `<script>
    tlq('track', 'InsertYourEventNameHere');
</script>`


export const codeString5 = `<script>
    tlq('set', 'ContactInfo', { 
      email: 'example@email.com', 
      phoneNumber: '+358501234567', 
      firstName: 'David', 
      LastName: 'Smith',
      birthday: '1985-06-17',
      gender: 'male',
      address: 'Street 1',
      postCode: '11015',
      city: 'Berlin',
      country: 'Germany',
      externalId: '123-91197003219'
    });
</script>`


export const codeString6 = `https://tracking.leadspark.io/collect/hook?k=LS-41417139-
3&track=Purchase&value=75.10&currency=EUR
&email=john.smith@email.com&phone=+358501234567&gclid=abcd`

export const codeString7 = `Endpoint:
https://tracking.leadspark.io/collect/hook?k=LS-41417139-3

Method: 
POST

Header:
Content-Type: application/json

Payload formatted as JSON:
{
    "track":          "Purchase",
    "value":          75.10,
    "currency":       "EUR",
    "url":            "https://www.yourshop.com/thank-you-
    page?gclid=abcd",
    "phoneNumber":    "0501234567",
    "email":          "john.smith@email.com",
    "firstName":      "John",
    "lastName":       "Smith",
    "birthday":       "1985-06-17",
    "gender":         "male",
    "address":        "Street 1",
    "postCode":       "11015",
    "city":           "Berlin",
    "country":        "Germany"
    "externalId":     "123-91197003219",
}
`

export const codeString8 = `<script>
    tlq('track', 'Purchase', {value: 75.10, currency:
'EUR'});

    tlq('set', 'ContactInfo', {externalId: '123-
91197003219'});
</script>`


export const codeString9 = `Endpoint:
https://tracking.leadspark.io/collect/hook?k=LS-41417139-3

Method:
POST

Header:
Content-Type: application/json

Payload formatted as JSON:
{
    "externalId":     "123-91197003219",
    "email":          "john.smith@email.com",
    "phoneNumber":    "0501234567",
    "firstName":      "John",
    "lastName":       "Smith",
    "birthday":       "1985-06-17",
    "gender":         "male",
    "address":        "Street 1",
    "postCode":       "11015",
    "city":           "Berlin",
    "country":        "Germany"
}`
