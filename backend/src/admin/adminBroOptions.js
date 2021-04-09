const Post = require("../models/post");
const User = require("../models/user");

const adminBroOptions = {
	resources: [
		User,
		{
			resource: Post,
			options: {
				properties: {
					body: { type: "richtext" },
				},
			},
		},
	],
	rootPath: "/admin",
};
module.exports = adminBroOptions;
