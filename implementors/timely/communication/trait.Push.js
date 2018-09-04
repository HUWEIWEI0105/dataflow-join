(function() {var implementors = {};
implementors["timely"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"timely/trait.Data.html\" title=\"trait timely::Data\">Data</a>, D:&nbsp;<a class=\"trait\" href=\"timely/trait.Data.html\" title=\"trait timely::Data\">Data</a>&gt; <a class=\"trait\" href=\"timely/communication/trait.Push.html\" title=\"trait timely::communication::Push\">Push</a>&lt;<a class=\"type\" href=\"timely/dataflow/channels/type.Bundle.html\" title=\"type timely::dataflow::channels::Bundle\">Bundle</a>&lt;T, D&gt;&gt; for <a class=\"struct\" href=\"timely/dataflow/channels/pushers/tee/struct.Tee.html\" title=\"struct timely::dataflow::channels::pushers::tee::Tee\">Tee</a>&lt;T, D&gt;",synthetic:false,types:["timely::dataflow::channels::pushers::tee::Tee"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"timely/trait.Data.html\" title=\"trait timely::Data\">Data</a>, D:&nbsp;<a class=\"trait\" href=\"timely/trait.Data.html\" title=\"trait timely::Data\">Data</a>, P:&nbsp;<a class=\"trait\" href=\"timely/communication/trait.Push.html\" title=\"trait timely::communication::Push\">Push</a>&lt;<a class=\"type\" href=\"timely/dataflow/channels/type.Bundle.html\" title=\"type timely::dataflow::channels::Bundle\">Bundle</a>&lt;T, D&gt;&gt;, H:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;</a>T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;</a>D) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt; <a class=\"trait\" href=\"timely/communication/trait.Push.html\" title=\"trait timely::communication::Push\">Push</a>&lt;<a class=\"type\" href=\"timely/dataflow/channels/type.Bundle.html\" title=\"type timely::dataflow::channels::Bundle\">Bundle</a>&lt;T, D&gt;&gt; for <a class=\"struct\" href=\"timely/dataflow/channels/pushers/exchange/struct.Exchange.html\" title=\"struct timely::dataflow::channels::pushers::exchange::Exchange\">Exchange</a>&lt;T, D, P, H&gt;",synthetic:false,types:["timely::dataflow::channels::pushers::exchange::Exchange"]},{text:"impl&lt;T, D, P&gt; <a class=\"trait\" href=\"timely/communication/trait.Push.html\" title=\"trait timely::communication::Push\">Push</a>&lt;<a class=\"type\" href=\"timely/dataflow/channels/type.Bundle.html\" title=\"type timely::dataflow::channels::Bundle\">Bundle</a>&lt;T, D&gt;&gt; for <a class=\"struct\" href=\"timely/dataflow/channels/pushers/counter/struct.Counter.html\" title=\"struct timely::dataflow::channels::pushers::counter::Counter\">Counter</a>&lt;T, D, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html\" title=\"trait core::cmp::Ord\">Ord</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"timely/communication/trait.Push.html\" title=\"trait timely::communication::Push\">Push</a>&lt;<a class=\"type\" href=\"timely/dataflow/channels/type.Bundle.html\" title=\"type timely::dataflow::channels::Bundle\">Bundle</a>&lt;T, D&gt;&gt;,&nbsp;</span>",synthetic:false,types:["timely::dataflow::channels::pushers::counter::Counter"]},{text:"impl&lt;T, D, P:&nbsp;<a class=\"trait\" href=\"timely/communication/trait.Push.html\" title=\"trait timely::communication::Push\">Push</a>&lt;<a class=\"type\" href=\"timely/dataflow/channels/type.Bundle.html\" title=\"type timely::dataflow::channels::Bundle\">Bundle</a>&lt;T, D&gt;&gt;&gt; <a class=\"trait\" href=\"timely/communication/trait.Push.html\" title=\"trait timely::communication::Push\">Push</a>&lt;<a class=\"type\" href=\"timely/dataflow/channels/type.Bundle.html\" title=\"type timely::dataflow::channels::Bundle\">Bundle</a>&lt;T, D&gt;&gt; for <a class=\"struct\" href=\"timely/dataflow/channels/pact/struct.LogPusher.html\" title=\"struct timely::dataflow::channels::pact::LogPusher\">LogPusher</a>&lt;T, D, P&gt;",synthetic:false,types:["timely::dataflow::channels::pact::LogPusher"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
