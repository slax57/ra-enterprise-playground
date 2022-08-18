export const data = {
  writers: [
    { id: 1, name: "J.K. Rowling", categories: [] },
    { id: 2, name: "Marcel Proust", categories: [1, 2, 3] },
    { id: 3, name: "Emile Zola", categories: [2, 3] },
    { id: 4, name: "Gordon Zola", categories: [3] },
    { id: 5, name: "Dante Alighieri", categories: [1] },
    { id: 6, name: "Pétrarque", categories: [1, 4] },
  ],
  posts_writers: [
    { post_id: 1, writer_id: 1 },
    { post_id: 1, writer_id: 2 },
    { post_id: 1, writer_id: 3 },
    { post_id: 1, writer_id: 4 },
    { post_id: 2, writer_id: 1 },
    { post_id: 3, writer_id: 2 },
    { post_id: 4, writer_id: 3 },
    { post_id: 4, writer_id: 4 },
    { post_id: 5, writer_id: 1 },
    { post_id: 5, writer_id: 2 },
    { post_id: 5, writer_id: 3 },
    { post_id: 6, writer_id: 4 },
    { post_id: 6, writer_id: 1 },
    { post_id: 6, writer_id: 2 },
    { post_id: 7, writer_id: 3 },
    { post_id: 7, writer_id: 4 },
  ],

  categories: [
    { id: 1, name: "One" },
    { id: 2, name: "Two" },
    { id: 3, name: "Three" },
    { id: 4, name: "Four" },
  ],
  posts: [
    {
      id: 1,
      title:
        "Accusantium qui nihil voluptatum quia voluptas maxime ab similique",
      body: "<p>Rerum velit quos est <strong>similique</strong>. Consectetur tempora eos ullam velit nobis sit debitis. Magni explicabo omnis delectus labore vel recusandae.</p><p>Aut a minus laboriosam harum placeat quas minima fuga. Quos nulla fuga quam officia tempore. Rerum occaecati ut eum et tempore. Nam ab repudiandae et nemo praesentium.</p><p>Cumque corporis officia occaecati ducimus sequi laborum omnis ut. Nam aspernatur veniam fugit. Nihil eum libero ea dolorum ducimus impedit sed. Quidem inventore porro corporis debitis eum in. Nesciunt unde est est qui nulla. Esse sunt placeat molestiae molestiae sed quia. Sunt qui quidem quos velit reprehenderit quos blanditiis ducimus. Sint et molestiae maxime ut consequatur minima. Quaerat rem voluptates voluptatem quos. Corporis perferendis in provident iure. Commodi odit exercitationem excepturi et deserunt qui.</p><p>Optio iste necessitatibus velit non. Neque sed occaecati culpa porro culpa. Quia quam in molestias ratione et necessitatibus consequatur. Est est tempora consequatur voluptatem vel. Mollitia tenetur non quis omnis perspiciatis deserunt sed necessitatibus. Ad rerum reiciendis sunt aspernatur.</p><p>Est ullam ut magni aspernatur. Eum et sed tempore modi.</p><p>Earum aperiam sit neque quo laborum suscipit unde. Expedita nostrum itaque non non adipisci. Ut delectus quis delectus est at sint. Iste hic qui ea eaque eaque sed id. Hic placeat rerum numquam id velit deleniti voluptatem. Illum adipisci voluptas adipisci ut alias. Earum exercitationem iste quidem eveniet aliquid hic reiciendis. Exercitationem est sunt in minima consequuntur. Aut quaerat libero dolorem.</p>",
      views: 143,
      average_note: 2.72198,
      commentable: true,
      pictures: [
        {
          name: "the picture name",
          url: "http://www.photo-libre.fr/paysage/1.jpg",
          metas: {
            title: "This is a great photo",
            definitions: ["72", "300"],
            authors: [
              {
                name: "Paul",
                email: "paul@email.com",
              },
              {
                name: "Joe",
                email: "joe@email.com",
              },
            ],
          },
        },
        {
          name: "better name",
          url: "http://www.photo-libre.fr/paysage/2.jpg",
        },
      ],
      published_at: new Date("2012-08-06"),
      category: "tech",
      subcategory: "computers",
      backlinks: [
        {
          date: "2012-08-09T00:00:00.000Z",
          url: "http://example.com/bar/baz.html",
        },
      ],
    },
    {
      id: 2,
      title: "Sint dignissimos in architecto aut",
      teaser:
        "Quam earum itaque corrupti labore quas nihil sed. Dolores sunt culpa voluptates exercitationem eveniet totam rerum. Molestias perspiciatis rem numquam accusamus.",
      body: "<p>Aliquam magni <em>tempora</em> quas enim. Perspiciatis libero corporis sunt eum nam. Molestias est sunt molestiae natus.</p><p>Blanditiis dignissimos autem culpa itaque. Explicabo perferendis ullam officia ut quia nemo. Eaque perspiciatis perspiciatis est hic non ullam et. Expedita exercitationem enim sit ut dolore.</p><h2>Sed in sunt officia blanditiis ipsam maiores perspiciatis amet</h2><p>Vero fugiat facere officiis aut quis rerum velit. Autem eius sint ullam. Nemo sunt molestiae nulla accusantium est voluptatem voluptas sed. In blanditiis neque libero voluptatem praesentium occaecati nulla libero. Perspiciatis eos voluptatem facere voluptatibus. Explicabo quo eveniet nihil culpa. Qui eos officia consequuntur sed esse praesentium dolorum. Eius perferendis qui quia autem nostrum sed. Illum in ex excepturi voluptas. Qui veniam sit alias delectus nihil. Impedit est ut alias illum repellendus qui.</p><p>Veniam est aperiam quisquam soluta. Magni blanditiis praesentium sed similique velit ipsam consequatur. Porro omnis magni sunt incidunt aspernatur ut.</p>",
      views: 563,
      average_note: 3.48121,
      commentable: true,
      published_at: new Date("2012-08-08"),
      category: "lifestyle",
      backlinks: [],
    },
    {
      id: 3,
      title: "Perspiciatis adipisci vero qui ipsam iure porro",
      teaser:
        "Ut ad consequatur esse illum. Ex dolore porro et ut sit. Commodi qui sed et voluptatibus laudantium.",
      body: "<p>Voluptatibus fugit sit praesentium voluptas vero vel. Reprehenderit quam cupiditate deleniti ipsum nisi qui. Molestiae modi sequi vel quibusdam est aliquid doloribus. Necessitatibus et excepturi alias necessitatibus magnam ea.</p><p>Dolor illum dolores qui et pariatur inventore incidunt molestias. Exercitationem ipsum voluptatibus voluptatum velit sint vel qui. Odit mollitia minus vitae impedit voluptatem. Voluptas ullam temporibus inventore fugiat pariatur odit molestias.</p><p>Atque est qui alias eum. Quibusdam rem ut dolores voluptate totam. Sit cumque perferendis sed a iusto laudantium quae et. Voluptatibus vitae natus quia laboriosam et deserunt. Doloribus fuga aut quo tempora animi eaque consequatur laboriosam.</p>",
      views: 467,
      commentable: true,
      published_at: new Date("2012-08-08"),
      category: "tech",
      backlinks: [
        {
          date: "2012-08-10T00:00:00.000Z",
          url: "http://example.com/foo/bar.html",
        },
        {
          date: "2012-08-14T00:00:00.000Z",
          url: "https://blog.johndoe.com/2012/08/12/foobar.html",
        },
        {
          date: "2012-08-22T00:00:00.000Z",
          url: "https://foo.bar.com/lorem/ipsum",
        },
        {
          date: "2012-08-29T00:00:00.000Z",
          url: "http://dicta.es/nam_doloremque",
        },
      ],
    },
    {
      id: 4,
      title: "Maiores et itaque aut perspiciatis",
      teaser:
        "Et quo voluptas odit veniam omnis dolores. Odit commodi consequuntur necessitatibus dolorem officia. Reiciendis quas exercitationem libero sed. Itaque non facilis sit tempore aut doloribus.",
      body: "<p>Sunt sunt aut est et consequatur ea dolores. Voluptatem rerum cupiditate dolore. Voluptas sit sapiente corrupti error ducimus. Qui enim aut possimus qui. Impedit voluptatem sed inventore iusto et ut et. Maxime sunt qui adipisci expedita quisquam. Velit ea ut in blanditiis eos doloribus.</p><p>Qui optio ad magnam eius. Est id velit ratione eum corrupti non vitae. Quam consequatur animi sed corrupti quae sed deserunt. Accusamus eius eos recusandae eum quia id.</p><p>Voluptas omnis omnis culpa est vel eum. Ut in tempore harum voluptates odit delectus sit et. Consequuntur quod nihil veniam natus placeat provident. Totam ut fuga vitae in. Possimus cumque quae voluptatem asperiores vitae officiis dolores. Qui autem eos dolores eius. Iure ut delectus quis voluptatem. Velit at incidunt minus laboriosam culpa. Pariatur ipsa ut enim dolor. Sed magni sunt molestiae voluptas ut illum. Sit consequuntur laborum aliquid delectus in. Consectetur dicta asperiores itaque aut mollitia. Minus praesentium officiis voluptas a officiis ad beatae.</p>",
      views: 685,
      average_note: 1.2319,
      commentable: false,
      published_at: new Date("2012-08-12"),
      category: "lifestyle",
    },
    {
      id: 5,
      title: "Sed quo et et fugiat modi",
      teaser:
        "Consequuntur id aut soluta aspernatur sit. Aut doloremque recusandae sit saepe ut quas earum. Quae pariatur iure et ducimus non. Cupiditate dolorem itaque in sit.",
      body: "<p>Aut molestiae quae explicabo voluptas. Assumenda ea ipsam quia. Rerum rerum magnam sunt doloremque dolorem nulla. Eveniet ut aliquam est dignissimos nisi molestias dicta. Dolorum et id esse illum. Ea omnis nesciunt tempore et aut. Ut ullam totam doloribus recusandae est natus voluptatum officiis. Ea quam eos velit ipsam non accusamus praesentium.</p><p>Animi et minima alias sint. Reiciendis qui ipsam autem fugit consequuntur veniam. Vel cupiditate voluptas enim dolore cum ad. Ut iusto eius et.</p><p>Quis praesentium aut aut aut voluptas et. Quam laudantium at laudantium amet. Earum quidem eos earum quaerat nihil libero quia sed.</p><p>Autem voluptatem nostrum ullam numquam quis. Et aut unde nesciunt officiis nam eos ut distinctio. Animi est explicabo voluptas officia quos necessitatibus. Omnis debitis unde et qui rerum. Nisi repudiandae autem mollitia dolorum veritatis aut. Rem temporibus labore repellendus enim consequuntur dicta autem. Illum illo inventore possimus officiis quidem.</p><p>Ullam accusantium eaque perspiciatis. Quidem dolor minus aut quidem. Praesentium earum beatae eos eligendi nostrum. Dolor nam quo aut.</p><p>Accusamus aut tempora omnis magni sit quos eos aut. Vitae ut inventore facere neque rerum. Qui esse rem cupiditate sit.</p><p>Est minus odio sint reprehenderit. Consectetur dolores eligendi et quaerat sint vel magni. Voluptatum hic cum placeat ad ea reiciendis laborum et. Eos ab id suscipit.</p>",
      views: 559,
      average_note: 3,
      commentable: true,
      published_at: new Date("2012-08-05"),
      category: "tech",
    },
    {
      id: 6,
      title: "Minima ea vero omnis odit officiis aut",
      teaser:
        "Omnis rerum voluptatem illum. Amet totam minus id qui aspernatur. Adipisci commodi velit sapiente architecto et molestias. Maiores doloribus quis occaecati quidem laborum. Quae quia quaerat est itaque. Vero assumenda quia tempora libero dicta quis asperiores magnam. Necessitatibus accusantium saepe commodi ut.",
      body: "<p>Sit autem rerum inventore repellendus. Enim placeat est ea dolor voluptas nisi alias. Repellat quam laboriosam repudiandae illum similique omnis non exercitationem. Modi mollitia omnis sed vel et expedita fugiat. Esse laboriosam doloribus deleniti atque quidem praesentium aliquid. Error animi ab excepturi quia. Et voluptates voluptatem et est quibusdam aspernatur. Fugiat consequatur veritatis commodi enim quaerat sint. Quis quae fuga exercitationem dolorem enim laborum numquam. Iste necessitatibus repellat in ea nihil et rem. Corporis dolores sed vitae consectetur dolores qui dicta. Laudantium et suscipit odit quidem qui. Provident libero eveniet distinctio debitis odio cum id dolorum. Consequuntur laboriosam qui ut magni sit dicta. Distinctio fugit voluptatibus voluptatem suscipit incidunt ut cupiditate. Magni harum in aut alias veniam. Eos aut impedit ut et. Iure aliquid adipisci aliquam et ab et qui. Itaque quod consequuntur dolore asperiores architecto neque. Exercitationem eum voluptas ut quis hic quo. Omnis quas porro laudantium. Qui magnam et totam quibusdam in quo. Impedit laboriosam eum sint soluta facere ut voluptatem.</p>",
      views: 208,
      average_note: 3.1214,
      published_at: new Date("2012-09-05"),
      category: "tech",
    },
    {
      id: 7,
      title: "Illum veritatis corrupti exercitationem sed velit",
      teaser:
        "Omnis hic quo aperiam fugiat iure amet est. Molestias ratione aut et dolor earum magnam placeat. Ad a quam ea amet hic omnis rerum.",
      body: "<p>Omnis sunt maxime qui consequatur perspiciatis et dolor. Assumenda numquam sit rerum aut dolores. Repudiandae rerum et quisquam. Perferendis cupiditate sequi non similique eum accusamus voluptas.</p><p>Officiis in voluptatum culpa ut eaque laborum. Sit quos velit sed ad voluptates. Alias aut quo accusantium aut cumque perferendis. Numquam rerum vel et est delectus. Mollitia dolores voluptatum accusantium id rem. Autem dolorem similique earum. Deleniti qui iusto et vero. Enim quaerat ipsum omnis magni. Autem magnam vero nulla impedit distinctio. Sequi laudantium ut animi enim recusandae et voluptatum. Dicta architecto nostrum voluptas consequuntur ea. Porro odio illo praesentium qui. Quia sit sed labore porro. Minima odit nemo sint praesentium. Ea sapiente quis aut. Qui cumque aut repudiandae in. Ipsam mollitia ab vitae iusto maxime. Eaque qui impedit et ea dolor aut. Tenetur ut nihil sed. Eum doloremque harum ipsam vel eos ut enim.</p>",
      views: 133,
      average_note: null,
      commentable: true,
      published_at: new Date("2012-09-29"),
      category: "tech",
    },
  ],
  users: [
    {
      id: 1,
      name: "Logan Schowalter",
      role: "admin",
    },
    {
      id: 2,
      name: "Breanna Gibson",
      role: "user",
    },
    {
      id: 3,
      name: "Annamarie Mayer",
      role: "user",
    },
  ],
};
