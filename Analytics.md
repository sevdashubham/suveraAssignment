# Analytics Design(using Amplitude)
- onfocus of search bar: amplitude.logEvent('Clicked search bar')
- change of input: amplitude.logEvent('Executed a search')
- selection of category: amplitude.logEvent('Selected a category', {'category': 'business'})
- onClick news card: amplitude.logEvent('news card clicked')
- sort filter used: amplitude.logEvent('sort by filter', {'option': 'relevance'})
- date filter used: amplitude.logEvent('dat filter', {'to/from': timestamp})
- scrolled to end: amplitude.logEvent('reached end of feed')
- time spent: amplitudeClient.logEventWithTimestamp('Time spent', {'clicks': 15}, 1545041372000);
