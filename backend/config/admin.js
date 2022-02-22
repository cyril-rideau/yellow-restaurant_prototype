module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bc87f38903537770f65ed27b3c6d7e55'),
  },
});
