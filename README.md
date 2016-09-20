# LayerHandler

LayerHandler is a (work in progress) simple JS library to handle Google Tag Manager easily.

It initializes the **GTM dataLayer** object, appends to your **HTML** body tag the **GTM** script code, and binds the specific events to all the **HTML** tags that have the **data-gtm-*** data attribute, pushing automatically the content of this data attribute to the **dataLayer** object. And all in one and little javascript library :)

## Usage

The library works with one basic special data attribute: **data-gtm-***. It search through all the **HTML** elements of your page to find this attribute, and binds the events and push the data you want.

Fill the **data-gtm-page** attribute on the **body** tag to initialize the **dataLayer** like this:

```
<body data-gtm-page='{"someKeyOnBody": "hello", "otherKeyOnBody": "bye"}'> </body>
```

This will initialize your **dataLayer** object with this info:

```
{"someKeyOnBody": "hello", "otherKeyOnBody": "bye"}
```

And in all the **HTML** tags you want to track, like this:

```
<a href="#" data-gtm-click='{"someKey": "hello", "otherKey": "bye"}'>Hello!</a>
```

Then simply add the **js** file to your page, and execute the **init** method passing your **GTM-ID** like this:

```
LayerHandler.init("YOUR_GTM_ID_HERE");
```

> ALERT! It's important to use use simple quotes to wrap the **data-gtm-*** info to be able to parse the data properly.

### Bind Event

If you want to bind some event on any tag to push certain data into the **dataLayer** object, you just have to give the special data attribute **data-gtm-*** to this tag with the content you want to push to the **dataLayer** on the event, and voila! There you have it!

Here some examples of use:

```
<a id="example1" href="#" data-gtm-click='{"someKey": "hello", "otherKey": "bye"}'>Click me!</a>
```

```
<a id="example2" href="#" data-gtm-mouseover='{"someKeyMouse": "hello", "otherKeyMouse": "bye"}'>Go hover me!</a>
```

And so on...

## TODO

- Tests!
- Add more events

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/dreamingechoes/layer-handler. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](contributor-covenant.org) code of conduct.

## License

**LayerHandler** is released under the terms of the [MIT License](http://opensource.org/licenses/MIT).
