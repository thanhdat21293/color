function config () {
    return {
			"collection" : {
				"include_in_all" : false,
				"properties" : {
					"name" : {
						"type" 			 : "text",
						"include_in_all" : true,
						"analyzer" 		 : "analyzer_for_index",
						"search_analyzer": "analyzer_for_searching"
					},
					"author" : {
						"type" 			 : "text",
						"include_in_all" : true,
						"analyzer" 		 : "analyzer_for_index",
						"search_analyzer": "analyzer_for_searching"
					},
					"author_email" : {
						"type" 			 : "text",
						"include_in_all" : true,
						"index"			 : "not_analyzed",
						"analyzer" 		 : "whitespace"
					},
					"address" : {
						"type" 			 : "text",
						"include_in_all" : true,
						"analyzer" 		 : "analyzer_for_index",
						"search_analyzer": "analyzer_for_searching"
					}
				}
			}
		}
}

module.exports = config;