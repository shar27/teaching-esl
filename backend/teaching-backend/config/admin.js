module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '004f11e18e2581c4ed318d12c6b2ae56'),
  },
});
