var inventory;

(function() {
  inventory = {
    lastId: 0,
    collection: [],
    setDate: function() {
      var date = new Date();
      document.querySelector('#order_date').textContent = date.toUTCString();
      // $("#order_date").text(date.toUTCString());
    },
    cacheTemplate: function() {
      // var $iTmpl = $("#hb_inventory_item").remove();
      // this.template = $iTmpl.html();
      var iTmpl = document.querySelector('#hb_inventory_item');
      this.template = iTmpl.innerHTML; // why does this work but firstElementChild does not?
                                       // because innerHTML returns a string, while
                                       // fEC returns an HTMLElement object
      iTmpl.remove();
    },
    add: function() {
      this.lastId++;
      var item = {
        id: this.lastId,
        name: "",
        stock_number: "",
        quantity: 1
      };
      this.collection.push(item);

      return item;
    },
    remove: function(idx) {
      this.collection = this.collection.filter(function(item) {
        return item.id !== idx;
      });
    },
    get: function(id) {
      var found_item;

      this.collection.forEach(function(item) {
        if (item.id === id) {
          found_item = item;
          return false;
        }
      });

      return found_item;
    },
    update: function(pageItem) {
      var id = this.findID(pageItem),
          item = this.get(id);

      //var pageItem = $item.get(0);
      item.name = pageItem.querySelector('.item_name').value;
      item.stock_number = pageItem.querySelector('.item_stock_number').value;
      item.quantity = pageItem.querySelector('.item_quantity').value;
      // item.name = $item.find("[name^=item_name]").val();
      // item.stock_number = $item.find("[name^=item_stock_number]").val();
      // item.quantity = $item.find("[name^=item_quantity]").val();
    },
    newItem: function(e) {
      e.preventDefault();
      var item = this.add();
      // var $item = $(this.template.replace(/ID/g, item.id));
      // $("#inventory").append($item);

      // 5-line Handlebars Process
      // var template = $('#hb_inventory_item').html(); -- line 1 done in cacheTemplate()
      var templateScript = Handlebars.compile(this.template);
      var context = { "ID": item.id };
      var html = templateScript(context);
      // $("#inventory").append(html); -- this is line 5

      // line 5 replacement
      var target = document.querySelector('#inventory');
      target.insertAdjacentHTML('beforeend', html);
    },
    findParent: function(e) {
      return e.target.closest("tr");
    },
    findID: function(item) {
     return +item.querySelector("input[type=hidden]").value;
    },
    deleteItem: function(e) {
      e.preventDefault();
      if (e.target.classList.contains('delete')) {
        let item = this.findParent(e);
        this.remove(this.findID(item));
        item.remove();
      }
    },
    updateItem: function(e) {
      if (e.target.tagName === "INPUT") {
        let item = this.findParent(e);
        this.update(item);
      }
    },
    bindEvents: function() {
      //$("#add_item").on("click", $.proxy(this.newItem, this));
      document.querySelector("#add_item").addEventListener("click", this.newItem.bind(this));
      document.querySelector("#inventory").addEventListener("click", this.deleteItem.bind(this));
      document.querySelector("#inventory").addEventListener("focusout", this.updateItem.bind(this));
    },
    init: function() {
      this.setDate();
      this.cacheTemplate();
      this.bindEvents();
    }
  };
})();

document.addEventListener('DOMContentLoaded', inventory.init.bind(inventory));
