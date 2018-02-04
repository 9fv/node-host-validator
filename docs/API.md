# node-host-validator: API Reference

**Warning !** Work in progress...

## Classes

<dl>
<dt><a href="#HostValidatorExpressions">HostValidatorExpressions</a></dt>
<dd><p>Host validators.</p>
</dd>
<dt><a href="#HostValidator">HostValidator</a></dt>
<dd><p>{HostValidator} class.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#_">_</a></dt>
<dd><p>This file is part of node-host-validator</p>
<p>Copyright (c) 2018 SAS 9 Février.</p>
<p>Distributed under the MIT License (license terms are at <a href="http://opensource.org/licenses/MIT">http://opensource.org/licenses/MIT</a>).</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#hostnameRFC1123">hostnameRFC1123()</a> ⇒ <code><a href="#HostValidator">HostValidator</a></code></dt>
<dd><p>Set host type as a hostname (RFC 1123).</p>
</dd>
<dt><a href="#hostValidator">hostValidator()</a></dt>
<dd><p>A function factory for {HostValidator} class.</p>
</dd>
</dl>

<a name="HostValidatorExpressions"></a>

## HostValidatorExpressions
Host validators.

**Kind**: global class  
**Access**: public  

* [HostValidatorExpressions](#HostValidatorExpressions)
    * [.ipv4](#HostValidatorExpressions.ipv4) ⇒ <code>RegExp</code>
    * [.ipv6](#HostValidatorExpressions.ipv6) ⇒ <code>RegExp</code>
    * [.hostnameRFC1123](#HostValidatorExpressions.hostnameRFC1123) ⇒ <code>RegExp</code>

<a name="HostValidatorExpressions.ipv4"></a>

### HostValidatorExpressions.ipv4 ⇒ <code>RegExp</code>
Returns regular expression to validate an IPv4 host.

**Kind**: static property of [<code>HostValidatorExpressions</code>](#HostValidatorExpressions)  
**Returns**: <code>RegExp</code> - - The regular expression.  
<a name="HostValidatorExpressions.ipv6"></a>

### HostValidatorExpressions.ipv6 ⇒ <code>RegExp</code>
Returns regular expression to validate an IPv6 host.

**Kind**: static property of [<code>HostValidatorExpressions</code>](#HostValidatorExpressions)  
**Returns**: <code>RegExp</code> - - The regular expression.  
<a name="HostValidatorExpressions.hostnameRFC1123"></a>

### HostValidatorExpressions.hostnameRFC1123 ⇒ <code>RegExp</code>
Returns regular expression to validate a hostname (RFC 1123).

**Kind**: static property of [<code>HostValidatorExpressions</code>](#HostValidatorExpressions)  
**Returns**: <code>RegExp</code> - - The regular expression.  
<a name="HostValidator"></a>

## HostValidator
{HostValidator} class.

**Kind**: global class  
**Access**: public  

* [HostValidator](#HostValidator)
    * [new HostValidator(value, type)](#new_HostValidator_new)
    * _instance_
        * [.ipv4()](#HostValidator+ipv4) ⇒ [<code>HostValidator</code>](#HostValidator)
        * [.ipv6()](#HostValidator+ipv6) ⇒ [<code>HostValidator</code>](#HostValidator)
        * [.hostnameRFC1123()](#HostValidator+hostnameRFC1123) ⇒ [<code>HostValidator</code>](#HostValidator)
        * [.validate()](#HostValidator+validate) ⇒ <code>boolean</code>
        * [.determinate()](#HostValidator+determinate) ⇒ <code>boolean</code>
    * _static_
        * [.validateHostForType(hostValue, hostType)](#HostValidator.validateHostForType) ⇒ <code>boolean</code>

<a name="new_HostValidator_new"></a>

### new HostValidator(value, type)
Create a new instance of {HostValidator}.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | A host: an IPv4 address, an IPv6 address or a hostname. |
| type | <code>null</code> \| <code>HostType</code> | An optional host type. |

<a name="HostValidator+ipv4"></a>

### hostValidator.ipv4() ⇒ [<code>HostValidator</code>](#HostValidator)
Set host type as IPv4.

**Kind**: instance method of [<code>HostValidator</code>](#HostValidator)  
<a name="HostValidator+ipv6"></a>

### hostValidator.ipv6() ⇒ [<code>HostValidator</code>](#HostValidator)
Set host type as IPv6.

**Kind**: instance method of [<code>HostValidator</code>](#HostValidator)  
<a name="HostValidator+hostnameRFC1123"></a>

### hostValidator.hostnameRFC1123() ⇒ [<code>HostValidator</code>](#HostValidator)
Set host type as a hostname (RFC 1123).

**Kind**: instance method of [<code>HostValidator</code>](#HostValidator)  
<a name="HostValidator+validate"></a>

### hostValidator.validate() ⇒ <code>boolean</code>
Validate the host formatting.

**Kind**: instance method of [<code>HostValidator</code>](#HostValidator)  
**Returns**: <code>boolean</code> - True if the host formatting is correct. False else.  
<a name="HostValidator+determinate"></a>

### hostValidator.determinate() ⇒ <code>boolean</code>
Determinate type of host if not provided.

**Kind**: instance method of [<code>HostValidator</code>](#HostValidator)  
<a name="HostValidator.validateHostForType"></a>

### HostValidator.validateHostForType(hostValue, hostType) ⇒ <code>boolean</code>
Validate host for the passed type.

**Kind**: static method of [<code>HostValidator</code>](#HostValidator)  

| Param | Type |
| --- | --- |
| hostValue | <code>string</code> | 
| hostType | <code>string</code> | 

<a name="_"></a>

## _
This file is part of node-host-validator

Copyright (c) 2018 SAS 9 Février.

Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).

**Kind**: global constant  
<a name="hostnameRFC1123"></a>

## hostnameRFC1123() ⇒ [<code>HostValidator</code>](#HostValidator)
Set host type as a hostname (RFC 1123).

**Kind**: global function  
<a name="hostValidator"></a>

## hostValidator()
A function factory for {HostValidator} class.

**Kind**: global function  
**Access**: public  

## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 SAS 9 Février
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
